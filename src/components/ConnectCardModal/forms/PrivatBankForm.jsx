/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { Form, Input } from 'semantic-ui-react';

const PrivatBankForm = ({
  merchantId, password, cardNumber, handleInputChange, errorField, errorMessage,
}) => {
  const error = {
    content: errorMessage,
    pointing: 'above',
  };

  return (
    <>
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
        label="Merchant ID"
        placeholder="Merchant ID"
        defaultValue={merchantId}
        onChange={(e, { value }) => handleInputChange('merchantId', value)}
        {...(errorField === 'merchantId' ? { error } : {})}
      />

      <Form.Field
        control={Input}
        label="Merchant password"
        placeholder="Merchant password"
        defaultValue={password}
        type="password"
        onChange={(e, { value }) => handleInputChange('password', value)}
        {...(errorField === 'password' ? { error } : {})}
      />

    </>
  );
};

export default PrivatBankForm;
