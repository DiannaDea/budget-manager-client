/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { Form, Input } from 'semantic-ui-react';

const MonobankForm = ({
  token, cardNumber, handleInputChange, errorField, errorMessage,
}) => {
  const error = {
    content: errorMessage,
    pointing: 'above',
  };

  return (
    <Form>
      <Form.Field
        control={Input}
        label="Card number"
        placeholder="Card number"
        defaultValue={cardNumber}
        onChange={(e, { value }) => handleInputChange('cardNumber', value)}
        {...(errorField === 'cardNumber' ? { error } : {})}
      />

      <Form.Field
        control={Input}
        label="Access token"
        placeholder="Access token"
        defaultValue={token}
        onChange={(e, { value }) => handleInputChange('token', value)}
        {...(errorField === 'token' ? { error } : {})}
      />

    </Form>
  );
};

export default MonobankForm;
