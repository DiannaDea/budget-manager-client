/* eslint-disable react/no-unused-state */
/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import { withTranslation } from 'react-i18next';
import { Menu, Dropdown, Button } from 'semantic-ui-react';

const languanges = [
  { key: 'en', text: 'English', value: 'en' },
  { key: 'ua', text: 'Ukrainian', value: 'ua' },
];

class NavBarView extends Component {
  state = {
    lang: localStorage.getItem('lang') || 'en',
  }

  handleLogout = () => {
    const { history, logout } = this.props;
    localStorage.clear();
    logout();
    history.push('/signin');
  }

  goToSignUp = () => {
    const { history } = this.props;
    history.push('/signup');
  }

  handleLanguageChange = (event, { value: lang }) => {
    const { i18n } = this.props;
    i18n.changeLanguage(lang);
    localStorage.setItem('lang', lang);
    this.setState({
      lang,
    });
  }

  render() {
    const { lang } = this.state;
    const { tokens, t } = this.props;

    return (
      <Menu size="small">
        <Menu.Menu position="right">
          <Dropdown
            options={languanges}
            item
            onChange={this.handleLanguageChange}
            value={lang}
          />

          <Menu.Item>
            {
              (tokens.accessToken && tokens.refreshToken)
                ? <Button primary onClick={this.handleLogout}>{t('logout')}</Button>
                : <Button primary onClick={this.goToSignUp}>Sign up</Button>
            }
          </Menu.Item>
        </Menu.Menu>
      </Menu>
    );
  }
}

export default withTranslation()(NavBarView);
