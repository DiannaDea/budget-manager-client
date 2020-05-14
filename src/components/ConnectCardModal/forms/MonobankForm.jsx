/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { Form, Input } from 'semantic-ui-react';

const MonobankForm = ({ token, cardNumber, handleInputChange }) => (
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
        <label>Access token</label>
        <Input
          placeholder="Access token"
          defaultValue={token}
          onChange={(e, { value }) => handleInputChange('token', value)}
        />
      </Form.Field>
    </Form.Group>

  </Form>
);

export default MonobankForm;
