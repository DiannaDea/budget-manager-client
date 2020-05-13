/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { Form, Input } from 'semantic-ui-react';

const MonobankForm = () => (
  <Form>
    <Form.Group inline>
      <Form.Field>
        <label>Card number</label>
        <Input placeholder="Card number" />
      </Form.Field>
    </Form.Group>

    <Form.Group inline>
      <Form.Field>
        <label>Access token</label>
        <Input placeholder="Access token" />
      </Form.Field>
    </Form.Group>

  </Form>
);

export default MonobankForm;
