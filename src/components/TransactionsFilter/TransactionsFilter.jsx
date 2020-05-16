import { chunk, uniqBy } from 'lodash';
import React, { Component } from 'react';
import { Button } from 'semantic-ui-react';
import FilterBlock from './FilterBlock';

const transformation = {
  banks: {
    title: 'Banks',
    type: 'banks',
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
        options,
      };
    }).filter(Boolean);

    this.setState({
      appliedFilters: filterOptions,
    });
  }

  handleCheckBoxChange = (event, data) => {
    const { appliedFilters } = this.state;
    const { id, name, checked } = data;

    const newFilters = appliedFilters.map((appliedFilter) => {
      if (appliedFilter.type === name) {
        const { options } = appliedFilter;

        const newOptions = options
          .map((option) => {
            if (option.key === id && !checked) {
              return { ...option, applied: false };
            }

            return { ...option };
          });

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

  render() {
    const { appliedFilters } = this.state;

    const filterBlocks = appliedFilters.map((filter) => (
      (
        <FilterBlock
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

        <Button>Apply</Button>
        <Button>Reset</Button>
      </>
    );
  }
}
