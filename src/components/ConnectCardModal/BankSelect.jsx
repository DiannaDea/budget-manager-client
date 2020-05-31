/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { Dropdown, Form } from 'semantic-ui-react';
import { withTranslation } from 'react-i18next';

const bankOptions = [
  { key: 'privatbank', value: 'privatbank', text: 'PrivatBank' },
  { key: 'monobank', value: 'monobank', text: 'Monobank' },
];

const BankSelect = ({ currentBank, handleBankChange, t }) => (
  <Form.Field
    control={Dropdown}
    label={t('bankSelect')}
    onChange={handleBankChange}
    options={bankOptions}
    placeholder={t('bankSelectPlaceholder')}
    selection
    value={currentBank}
  />
);

export default withTranslation()(BankSelect);
