/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import {
  Form, Message, Button, Icon,
} from 'semantic-ui-react';
import { withTranslation } from 'react-i18next';
import GroupsSelect from '../GroupsSelect';

const ChooseGroupForm = ({
  cardAuth, saveCardInfo, t, ...props
}) => (
  <Form success>
    {
      (cardAuth && !props.savedCard && !props.savedCardError)
        ? (
          <Message
            success
            header={t('successMessageTitle')}
            content={cardAuth ? `${t('cardMessagePrefix')} ${cardAuth.cardNumber} ${t('successCardVerificationMessage')}` : ''}
          />
        )
        : null
    }
    {
      (cardAuth && props.savedCardError)
        ? (
          <Message
            negative
            header={t('errorMessageTitle')}
            content={cardAuth ? `${t('errorCardVerificationMessage')} ${cardAuth.cardNumber}` : ''}
          />
        )
        : null
    }
    {
      (cardAuth && props.savedCard)
        ? (
          <Message
            success
            header={t('successMessageTitle')}
            content={cardAuth ? `${t('cardMessagePrefix')} ${cardAuth.cardNumber} ${t('successSaveCardMessage')}` : ''}
          />
        )
        : null
    }
    <GroupsSelect {...props} />
    <Button fluid primary disabled={!!props.savedCard} onClick={saveCardInfo}>
      <Icon name="check" />
      {' '}
      {t('btnSaveCard')}
    </Button>
  </Form>
);

export default withTranslation()(ChooseGroupForm);
