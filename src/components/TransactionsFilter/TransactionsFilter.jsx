import React, { Component } from 'react';
import { Button, Grid } from 'semantic-ui-react';
import DateFilterBlock from './DateFilterBlock';
import FilterBlock from './FilterBlock';

import { flatFilters, transformFiltersToRequestParams } from '../../utils/filters';

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
      getFilters({ groupIds, userId: localStorage.getItem('userId') });
    }
  }

  componentDidUpdate(prevProps) {
    const { groups, getFilters, filters } = this.props;

    if (prevProps.groups.length !== groups.length) {
      const groupIds = groups.map((group) => group.id).join(',');
      getFilters({ groupIds, userId: localStorage.getItem('userId') });
    }

    if (prevProps.filters !== filters) {
      this.setFiltersInState();
    }
  }

  setFiltersInState = () => {
    const { filters } = this.props;

    const flatten = flatFilters(filters);
    this.setState(flatten);
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
    const {
      filters, groups, pagination, getTransactions,
    } = this.props;

    this.setFiltersInState();
    this.setState({
      dateRange: filters.dates,
    });

    const { appliedFilters, dateRange } = flatFilters(filters);
    const reqParams = transformFiltersToRequestParams(groups, appliedFilters, dateRange);

    getTransactions({
      ...reqParams,
      ...pagination,
      userId: localStorage.getItem('userId'),
    });
  }

  applyFilters = () => {
    const { appliedFilters, dateRange } = this.state;
    const { groups, getTransactions, pagination } = this.props;

    const requestParams = transformFiltersToRequestParams(
      groups,
      appliedFilters,
      dateRange,
    );
    getTransactions({ ...requestParams, ...pagination, userId: localStorage.getItem('userId') });
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
        <Grid divided="vertically">
          <Grid.Row columns={2}>
            <Grid.Column>
              <Button fluid onClick={this.applyFilters}>Apply</Button>
            </Grid.Column>
            <Grid.Column>
              <Button fluid onClick={this.resetFilters}>Reset</Button>
            </Grid.Column>
          </Grid.Row>
        </Grid>


      </>
    );
  }
}
