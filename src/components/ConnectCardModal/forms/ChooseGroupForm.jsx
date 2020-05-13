/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { Form, Message } from 'semantic-ui-react';
import GroupsSelect from '../GroupsSelect';

const ChooseGroupForm = () => (
  <Form success>
    <Message
      success
      header="Success!"
      content="Card verification has completed"
    />
    <Form.Group inline>
      <GroupsSelect />
    </Form.Group>
  </Form>
);

export default ChooseGroupForm;
