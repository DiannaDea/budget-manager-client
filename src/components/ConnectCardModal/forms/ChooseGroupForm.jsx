/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import {
  Form, Message, Button, Icon,
} from 'semantic-ui-react';
import GroupsSelect from '../GroupsSelect';

const ChooseGroupForm = ({ cardAuth, saveCardInfo, ...props }) => (
  <Form success>
    {
      (cardAuth && !props.savedCard && !props.savedCardError)
        ? (
          <Message
            success
            header="Success!"
            content={cardAuth ? `Card ${cardAuth.cardNumber} has successfully been verified` : ''}
          />
        )
        : null
    }
    {
      (cardAuth && props.savedCardError)
        ? (
          <Message
            negative
            header="Ooops!"
            content={cardAuth ? `Something went wrong: can't save card ${cardAuth.cardNumber}` : ''}
          />
        )
        : null
    }
    {
      (cardAuth && props.savedCard)
        ? (
          <Message
            success
            header="Success!"
            content={cardAuth ? `Card ${cardAuth.cardNumber} was saved` : ''}
          />
        )
        : null
    }
    <GroupsSelect {...props} />
    <Button fluid primary disabled={!!props.savedCard} onClick={saveCardInfo}>
      <Icon name="check" />
      {' '}
      Save card
    </Button>
  </Form>
);

export default ChooseGroupForm;
