import { uniqBy } from 'lodash';
import { DateTime } from 'luxon';

const transformation = {
  groups: {
    title: 'Groups',
    type: 'groups',
    requestParam: 'groupIds',
    getOptions: ({ groups }) => groups.map((group) => ({
      key: group.id,
      value: group.name,
      applied: true,
    })),
  },
  banks: {
    title: 'Banks',
    type: 'banks',
    requestParam: 'bankIds',
    getOptions: ({ banks }) => {
      const filteredBanks = uniqBy(banks, (bank) => bank.id);
      return filteredBanks.map((bank) => {
        if (bank.internalName === 'custom') {
          return {
            key: bank.id,
            value: null,
            applied: true,
          };
        }

        return {
          key: bank.id,
          value: bank.name,
          applied: true,
        };
      });
    },
  },
  // cards: {
  //   title: 'Cards',
  //   type: 'cards',
  //   requestParam: 'cardIds',
  //   getOptions: ({ cards }) => cards.map((card) => {
  //     if (!card.cardNumber) {
  //       return {
  //         key: card.id,
  //         value: null,
  //         applied: true,
  //       };
  //     }
  //     const arr = card.cardNumber.split('');
  //     const chunks = chunk(arr, 4);
  //     chunks[1] = ['*', '*', '*', '*'];
  //     chunks[2] = ['*', '*', '*', '*'];
  //     const cardNumber = chunks.reduce((res, ch) => res.concat(` ${ch.join('')}`), '');

  //     return {
  //       key: card.id,
  //       value: cardNumber,
  //       applied: true,
  //     };
  //   }),
  // },
  categories: {
    title: 'Categories',
    type: 'categories',
    requestParam: 'categoryIds',
    getOptions: ({ categories }) => categories.map((category) => ({
      key: category.id,
      value: category.name,
      applied: true,
    })),
  },
};

export function flatFilters(filters) {
  const filterOptions = Object.keys(filters).map((filterName) => {
    const config = transformation[filterName];

    if (!config) {
      return null;
    }

    const options = config.getOptions(filters);

    return {
      title: config.title,
      type: config.type,
      requestParam: config.requestParam,
      options,
    };
  }).filter(Boolean);

  return {
    appliedFilters: filterOptions,
    dateRange: filters.dates,
  };
}

export function transformFiltersToRequestParams(groups, appliedFilters, dateRange) {
  const groupIds = groups.map((group) => group.id).join(',');

  const filters = appliedFilters.reduce((res, filterGroup) => {
    const filter = filterGroup.options
      .filter((option) => option.applied)
      .map((option) => option.key)
      .join(',');

    return {
      ...res,
      ...(filter.length && { [filterGroup.requestParam]: filter }),
    };
  }, {});

  return {
    groupIds,
    ...filters,
    dateStart: DateTime
      .fromISO(dateRange.min)
      .toFormat('yyyy-MM-dd'),
    dateEnd: DateTime
      .fromISO(dateRange.max)
      .toFormat('yyyy-MM-dd'),
  };
}
