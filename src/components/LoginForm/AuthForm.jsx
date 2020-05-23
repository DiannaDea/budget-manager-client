/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import {
  Form, Input, Button, Icon,
} from 'semantic-ui-react';

const AuthForm = ({
  errorMessage, errorField, email, password, handleInputChange, handleSignIn,
}) => {
  const error = {
    content: errorMessage,
    pointing: 'above',
  };

  return (
    <>
      <Form.Field
        control={Input}
        label="Email"
        type="email"
        placeholder="Email"
        defaultValue={email}
        onChange={(e, { value }) => handleInputChange('email', value)}
        {...(errorField === 'email' ? { error } : {})}
      />

      <Form.Field
        control={Input}
        label="Password"
        placeholder="Password"
        type="password"
        defaultValue={password}
        onChange={(e, { value }) => handleInputChange('password', value)}
        {...(errorField === 'password' ? { error } : {})}
      />

      <Button fluid onClick={handleSignIn} primary>
        <Icon name="checkmark" />
        {' '}
        Sign in
      </Button>
    </>
  );
};

export default AuthForm;
