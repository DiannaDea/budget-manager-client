/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import {
  Form, Input, Button, Icon,
} from 'semantic-ui-react';
import { withTranslation } from 'react-i18next';

const AuthForm = ({
  errorMessage, errorField, email, password, handleInputChange, handleSignIn, t,
}) => {
  const error = {
    content: errorMessage,
    pointing: 'above',
  };

  return (
    <>
      <Form.Field
        control={Input}
        label={t('emailLabel')}
        type="email"
        placeholder={t('emailLabel')}
        defaultValue={email}
        onChange={(e, { value }) => handleInputChange('email', value)}
        {...(errorField === 'email' ? { error } : {})}
      />

      <Form.Field
        control={Input}
        label={t('passwordLabel')}
        placeholder={t('passwordLabel')}
        type="password"
        defaultValue={password}
        onChange={(e, { value }) => handleInputChange('password', value)}
        {...(errorField === 'password' ? { error } : {})}
      />

      <Button fluid onClick={handleSignIn} primary>
        <Icon name="checkmark" />
        {' '}
        {t('signInBtn')}
      </Button>
    </>
  );
};

export default withTranslation()(AuthForm);
