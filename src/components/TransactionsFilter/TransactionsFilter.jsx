import { chunk, uniqBy } from 'lodash';
import React, { Component } from 'react';
import FilterBlock from './FilterBlock';

const transformation = {
  banks: {
    title: 'Banks',
    getOptions: ({ banks }) => {
      const filteredBanks = uniqBy(banks, (bank) => bank.id);
      return filteredBanks.map((bank) => ({
        key: bank.id,
        value: bank.name,
      }));
    },
  },
  cards: {
    title: 'Cards',
    getOptions: ({ cards }) => cards.map((card) => {
      const arr = card.cardNumber.split('');
      const chunks = chunk(arr, 4);
      chunks[1] = ['*', '*', '*', '*'];
      chunks[2] = ['*', '*', '*', '*'];
      const cardNumber = chunks.reduce((res, ch) => res.concat(` ${ch.join('')}`), '');

      return {
        key: card.id,
        value: cardNumber,
      };
    }),
  },
};

export default class TransactionsFilter extends Component {
  componentDidMount() {
    const { groups, getFilters } = this.props;

    if (groups.length) {
      const groupIds = groups.map((group) => group.id).join(',');
      getFilters({ groupIds });
    }
  }

  componentDidUpdate(prevProps) {
    const { groups, getFilters } = this.props;

    if (prevProps.groups.length !== groups.length) {
      const groupIds = groups.map((group) => group.id).join(',');
      getFilters({ groupIds });
    }
  }

  render() {
    const { filters } = this.props;

    const filterBlocks = Object.keys(filters).map((filterName) => {
      const config = transformation[filterName];

      return (config)
        ? <FilterBlock title={config.title} options={config.getOptions(filters)} />
        : null;
    }).filter(Boolean);

    return (
      <>
        {
        filterBlocks.map((block) => block)
        }
      </>
    );
  }
}
