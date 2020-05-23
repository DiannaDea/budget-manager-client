/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import {
  Form, Input, Button, Icon, Image,
} from 'semantic-ui-react';

const VerifyCode = ({
  errorMessage, errorField, verificationCode, handleInputChange, handleVerification, qrcode,
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
        label="Verification code"
        placeholder="Verification code"
        defaultValue={verificationCode}
        onChange={(e, { value }) => handleInputChange('verificationCode', value)}
        {...(errorField === 'verificationCode' ? { error } : {})}
      />

      <Button fluid onClick={handleVerification} primary>
        <Icon name="checkmark" />
        {' '}
        Verify code
      </Button>
    </>
  );
};

export default VerifyCode;
