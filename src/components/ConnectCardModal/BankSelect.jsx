/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { Dropdown, Form } from 'semantic-ui-react';

const bankOptions = [
  { key: 'privatbank', value: 'privatbank', text: 'PrivatBank' },
  { key: 'monobank', value: 'monobank', text: 'Monobank' },
];

const BankSelect = ({ currentBank, handleBankChange }) => (
  <Form>
    <Form.Group inline>
      <label>Bank</label>
      <Form.Field>
        <Dropdown
          onChange={handleBankChange}
          options={bankOptions}
          placeholder="Choose bank"
          selection
          value={currentBank}
        />
      </Form.Field>
    </Form.Group>
  </Form>
);

export default BankSelect;
