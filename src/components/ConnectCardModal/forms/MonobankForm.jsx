/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { Form, Input } from 'semantic-ui-react';
import { withTranslation } from 'react-i18next';

const MonobankForm = ({
  token, cardNumber, handleInputChange, errorField, errorMessage, t,
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
        label={t('accessTokenLabel')}
        placeholder={t('accessTokenLabel')}
        type="password"
        defaultValue={token}
        onChange={(e, { value }) => handleInputChange('token', value)}
        {...(errorField === 'token' ? { error } : {})}
      />

    </>
  );
};

export default withTranslation()(MonobankForm);
