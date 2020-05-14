/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { Form, Message, Button } from 'semantic-ui-react';
import GroupsSelect from '../GroupsSelect';

const ChooseGroupForm = ({ cardAuth, saveCardInfo, ...props }) => (
  <Form success>
    <Message
      success
      header="Success!"
      content={cardAuth ? `Card ${cardAuth.cardNumber} has successfully been verified` : ''}
    />
    <Form.Group inline>
      <GroupsSelect {...props} />
    </Form.Group>
    <Button onClick={saveCardInfo}>Save</Button>
  </Form>
);

export default ChooseGroupForm;
