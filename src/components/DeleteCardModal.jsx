/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react';
import {
  Button, Icon, Modal,
} from 'semantic-ui-react';

export default class DeleteCardModal extends Component {
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
    const { card } = this.props;

    return (
      <Modal
        trigger={<Button fluid color="red" onClick={this.handleOpen}>Delete</Button>}
        open={this.state.modalOpen}
        onClose={this.handleClose}
        size="mini"
      >
        <Modal.Header>Delete card</Modal.Header>

        <Modal.Content>
          <p>
            Are you sure that you want to delete card:
            {' '}
            {(card) ? card.cardNumber : ''}
            ?
          </p>
        </Modal.Content>
        <Modal.Actions>
          <Button color="red" inverted onClick={this.handleClose}>
            <Icon name="remove" />
            {' '}
            No
          </Button>
          <Button color="green" inverted onClick={this.deleteCardInfo}>
            <Icon name="checkmark" />
            {' '}
            Yes
          </Button>
        </Modal.Actions>
      </Modal>
    );
  }
}