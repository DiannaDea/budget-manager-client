/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import { Menu } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { withTranslation } from 'react-i18next';

class SideBar extends Component {
  render() {
    const { activeItem, t } = this.props;

    return (
      <Menu fluid vertical tabular>
        <Menu.Item
          name={t('banksTab')}
          active={activeItem === 'banks'}
          as={Link}
          to="/manager/banks"
        />
        <Menu.Item
          name={t('groupsTab')}
          active={activeItem === 'groups'}
          as={Link}
          to="/manager/groups"
        />
        <Menu.Item
          name={t('transactionsTab')}
          active={activeItem === 'transactions'}
          as={Link}
          to="/manager/transactions"
        />
        <Menu.Item
          name={t('goalsTab')}
          active={activeItem === 'goals'}
          as={Link}
          to="/manager/goals"
        />
      </Menu>
    );
  }
}

export default withTranslation()(SideBar);
