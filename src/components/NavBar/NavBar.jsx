/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import { Menu, Dropdown, Button } from 'semantic-ui-react';

export default class NavBarView extends Component {
  handleLogout = () => {
    const { history, logout } = this.props;
    localStorage.clear();
    logout();
    history.push('/signin');
  }

  render() {
    const { tokens } = this.props;

    return (
      <Menu size="small">
        <Menu.Menu position="right">
          <Dropdown item text="Language">
            <Dropdown.Menu>
              <Dropdown.Item>English</Dropdown.Item>
              <Dropdown.Item>Russian</Dropdown.Item>
              <Dropdown.Item>Spanish</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

          <Menu.Item>
            {
              (tokens.accessToken && tokens.refreshToken)
                ? <Button primary onClick={this.handleLogout}>Logout</Button>
                : <Button primary>Sign in</Button>
            }
          </Menu.Item>
        </Menu.Menu>
      </Menu>
    );
  }
}
