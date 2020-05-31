/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react';
import {
  Button, Icon, Modal,
} from 'semantic-ui-react';
import { withTranslation } from 'react-i18next';

export default withTranslation()(class DeleteCardModal extends Component {
  state = {
    modalOpen: false,
  }

  handleOpen = () => this.setState({ modalOpen: true })

  handleClose = () => this.setState({ modalOpen: false })

  deleteCardInfo = () => {
    const { card, deleteCard, match: { params: { id: bankId } } } = this.props;

    deleteCard({
      cardId: card.id,
      bankId,
    });
    this.handleClose();
  }

  render() {
    const { card, t } = this.props;

    return (
      <Modal
        trigger={<Button fluid color="red" onClick={this.handleOpen}>{t('deleteBtn')}</Button>}
        open={this.state.modalOpen}
        onClose={this.handleClose}
        size="mini"
      >
        <Modal.Header>{t('deleteCardTitle')}</Modal.Header>

        <Modal.Content>
          <p>
            {t('deleteCardText')}
            {' '}
            {(card) ? card.cardNumber : ''}
            ?
          </p>
        </Modal.Content>
        <Modal.Actions>
          <Button color="red" inverted onClick={this.handleClose}>
            <Icon name="remove" />
            {' '}
            {t('btnNo')}
          </Button>
          <Button color="green" inverted onClick={this.deleteCardInfo}>
            <Icon name="checkmark" />
            {' '}
            {t('btnYes')}
          </Button>
        </Modal.Actions>
      </Modal>
    );
  }
});
