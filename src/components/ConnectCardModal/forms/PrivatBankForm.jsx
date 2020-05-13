/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { Form, Input } from 'semantic-ui-react';

const PrivatBankForm = () => (
  <Form>
    <Form.Group inline>
      <Form.Field>
        <label>Card number</label>
        <Input placeholder="Card number" />
      </Form.Field>
    </Form.Group>

    <Form.Group inline>
      <Form.Field>
        <label>Merchant ID</label>
        <Input placeholder="Merchant ID" />
      </Form.Field>
    </Form.Group>

    <Form.Group inline>
      <Form.Field>
        <label>Merchant password</label>
        <Input placeholder="Merchant password" />
      </Form.Field>
    </Form.Group>
  </Form>
);

export default PrivatBankForm;
