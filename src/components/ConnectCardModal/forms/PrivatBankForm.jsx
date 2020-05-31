/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { Form, Input } from 'semantic-ui-react';
import { withTranslation } from 'react-i18next';

const PrivatBankForm = ({
  merchantId, password, cardNumber, handleInputChange, errorField, errorMessage, t,
}) => {
  const error = {
    content: errorMessage,
    pointing: 'above',
  };

  return (
    <>
      <Form.Field
        control={Input}
        label={t('cardNumberLabel')}
        placeholder={t('cardNumberLabel')}
        defaultValue={cardNumber}
        onChange={(e, { value }) => handleInputChange('cardNumber', value)}
        {...(errorField === 'cardNumber' ? { error } : {})}
      />

      <Form.Field
        control={Input}
        label={t('merchantIdLabel')}
        placeholder={t('merchantIdLabel')}
        defaultValue={merchantId}
        onChange={(e, { value }) => handleInputChange('merchantId', value)}
        {...(errorField === 'merchantId' ? { error } : {})}
      />

      <Form.Field
        control={Input}
        label={t('merchatPasswordLabel')}
        placeholder={t('merchatPasswordLabel')}
        defaultValue={password}
        type="password"
        onChange={(e, { value }) => handleInputChange('password', value)}
        {...(errorField === 'password' ? { error } : {})}
      />

    </>
  );
};

export default withTranslation()(PrivatBankForm);
