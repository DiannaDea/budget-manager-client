import { chunk, uniqBy } from 'lodash';
import { DateTime } from 'luxon';
import React, { Component } from 'react';
import { Button } from 'semantic-ui-react';
import DateFilterBlock from './DateFilterBlock';
import FilterBlock from './FilterBlock';

const transformation = {
  banks: {
    title: 'Banks',
    type: 'banks',
    requestParam: 'bankIds',
    getOptions: ({ banks }) => {
      const filteredBanks = uniqBy(banks, (bank) => bank.id);
      return filteredBanks.map((bank) => ({
        key: bank.id,
        value: bank.name,
        applied: true,
      }));
    },
  },
  cards: {
    title: 'Cards',
    type: 'cards',
    requestParam: 'cardIds',
    getOptions: ({ cards }) => cards.map((card) => {
      const arr = card.cardNumber.split('');
      const chunks = chunk(arr, 4);
      chunks[1] = ['*', '*', '*', '*'];
      chunks[2] = ['*', '*', '*', '*'];
      const cardNumber = chunks.reduce((res, ch) => res.concat(` ${ch.join('')}`), '');

      return {
        key: card.id,
        value: cardNumber,
        applied: true,
      };
    }),
  },
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

export default class TransactionsFilter extends Component {
  state = {
    appliedFilters: [],
    dateRange: {
      min: null,
      max: null,
    },
  }

  componentDidMount() {
    const { groups, getFilters } = this.props;

    if (groups.length) {
      const groupIds = groups.map((group) => group.id).join(',');
      getFilters({ groupIds });
    }
  }

  componentDidUpdate(prevProps) {
    const { groups, getFilters, filters } = this.props;

    if (prevProps.groups.length !== groups.length) {
      const groupIds = groups.map((group) => group.id).join(',');
      getFilters({ groupIds });
    }

    if (prevProps.filters !== filters) {
      this.setFiltersInState();
    }
  }

  setFiltersInState = () => {
    const { filters } = this.props;

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

    this.setState({
      appliedFilters: filterOptions,
      dateRange: filters.dates,
    });
  }

  handleCheckBoxChange = (event, data) => {
    const { appliedFilters } = this.state;
    const { id, name, checked } = data;

    const newFilters = appliedFilters.map((appliedFilter) => {
      if (appliedFilter.type === name) {
        const { options } = appliedFilter;

        const newOptions = options
          .map((option) => (
            (option.key === id)
              ? { ...option, applied: checked }
              : { ...option }));

        return {
          ...appliedFilter, options: newOptions,
        };
      }

      return { ...appliedFilter };
    });

    this.setState({
      appliedFilters: newFilters,
    });
  }

  resetFilters = () => {
    const { filters } = this.props;

    this.setFiltersInState();
    this.setState({
      dateRange: filters.dates,
    });
  }

  applyFilters = () => {
    const { appliedFilters, dateRange } = this.state;
    const { groups, getTransactions } = this.props;

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

    getTransactions({
      groupIds,
      ...filters,
      dateStart: DateTime
        .fromISO(dateRange.min)
        .toFormat('yyyy-MM-dd'),
      dateEnd: DateTime
        .fromISO(dateRange.max)
        .toFormat('yyyy-MM-dd'),
    });
  }

  handleDateChange = (date, type) => {
    const { dateRange } = this.state;
    const newDate = (new Date(date)).toISOString();

    this.setState({
      dateRange: {
        ...dateRange,
        [type]: newDate,
      },
    });
  }

  render() {
    const { appliedFilters, dateRange } = this.state;

    const filterBlocks = appliedFilters.map((filter) => (
      (
        <FilterBlock
          key={filter.type}
          type={filter.type}
          title={filter.title}
          options={filter.options}
          handleCheckBoxChange={this.handleCheckBoxChange}
        />
      )
    )).filter(Boolean);

    return (
      <>
        {
        filterBlocks.map((block) => block)
        }
        <DateFilterBlock
          minDate={dateRange.min}
          maxDate={dateRange.max}
          handleDateChange={this.handleDateChange}
        />
        <Button onClick={this.applyFilters}>Apply</Button>
        <Button onClick={this.resetFilters}>Reset</Button>
      </>
    );
  }
}
