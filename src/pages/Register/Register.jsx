/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import { withTranslation } from 'react-i18next';

export default withTranslation()(class Register extends React.Component {
  render() {
    const { t } = this.props;

    return (
      <p>{t('signUp')}</p>
    );
  }
});
