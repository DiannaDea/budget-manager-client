/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import {
  Form, Input, Button, Icon, Image,
} from 'semantic-ui-react';
import { withTranslation } from 'react-i18next';

const VerifyCode = ({
  errorMessage, errorField, verificationCode, handleInputChange, handleVerification, qrcode, t,
}) => {
  const error = {
    content: errorMessage,
    pointing: 'above',
  };

  return (
    <>
      <Image src={qrcode} size="small" centered />
      <Form.Field
        control={Input}
        label={t('verificationCodeLabel')}
        placeholder={t('verificationCodeLabel')}
        defaultValue={verificationCode}
        onChange={(e, { value }) => handleInputChange('verificationCode', value)}
        {...(errorField === 'verificationCode' ? { error } : {})}
      />

      <Button fluid onClick={handleVerification} primary>
        <Icon name="checkmark" />
        {' '}
        {t('verifyCodeBtn')}
      </Button>
    </>
  );
};

export default withTranslation()(VerifyCode);
