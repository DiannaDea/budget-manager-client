/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { Form, Input } from 'semantic-ui-react';

const PrivatBankForm = ({
  merchantId, password, cardNumber, handleInputChange,
}) => (
  <Form>
    <Form.Group inline>
      <Form.Field>
        <label>Card number</label>
        <Input
          placeholder="Card number"
          defaultValue={cardNumber}
          onChange={(e, { value }) => handleInputChange('cardNumber', value)}
        />
      </Form.Field>
    </Form.Group>

    <Form.Group inline>
      <Form.Field>
        <label>Merchant ID</label>
        <Input
          placeholder="Merchant ID"
          defaultValue={merchantId}
          onChange={(e, { value }) => handleInputChange('merchantId', value)}
        />
      </Form.Field>
    </Form.Group>

    <Form.Group inline>
      <Form.Field>
        <label>Merchant password</label>
        <Input
          placeholder="Merchant password"
          defaultValue={password}
          onChange={(e, { value }) => handleInputChange('password', value)}
        />
      </Form.Field>
    </Form.Group>
  </Form>
);

export default PrivatBankForm;
