/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import { Menu } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

export default class SideBar extends Component {
  render() {
    const { activeItem } = this.props;

    return (
      <Menu fluid vertical tabular>
        <Menu.Item
          name="banks"
          active={activeItem === 'banks'}
          as={Link}
          to="/manager/banks"
        />
        <Menu.Item
          name="groups"
          active={activeItem === 'groups'}
          as={Link}
          to="/manager/groups"
        />
        <Menu.Item
          name="transactions"
          active={activeItem === 'transactions'}
          as={Link}
          to="/manager/transactions"
        />
        <Menu.Item
          name="goals"
          active={activeItem === 'goals'}
          as={Link}
          to="/manager/goals"
        />
      </Menu>
    );
  }
}
