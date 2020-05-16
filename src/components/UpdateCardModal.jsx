/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react';
import {
  Button, Form, Icon, Modal,
} from 'semantic-ui-react';
import GroupsSelect from './ConnectCardModal/GroupsSelect';

export default class UpdateCardModal extends Component {
  state = {
    modalOpen: false,
    selectedGroup: this.props.card.groupId,
  }

  handleOpen = () => this.setState({ modalOpen: true })

  handleClose = () => this.setState({ modalOpen: false })

  updateCardInfo = () => {
    const { card, updateCard, match: { params: { id: bankId } } } = this.props;
    const { selectedGroup } = this.state;

    updateCard({
      cardId: card.id,
      bankId,
      groupId: selectedGroup,
    });
    this.handleClose();
  }

  handleGroupSelect = (event, { value: group }) => {
    this.setState({ selectedGroup: group });
  }

  render() {
    return (
      <Modal
        trigger={<Button fluid color="blue" onClick={this.handleOpen}>Edit</Button>}
        open={this.state.modalOpen}
        onClose={this.handleClose}
        size="mini"
      >
        <Modal.Header>Update card</Modal.Header>

        <Modal.Content>
          <Form success>

            <GroupsSelect
              selectedGroup={this.state.selectedGroup}
              handleGroupSelect={this.handleGroupSelect}
            />

            <Button fluid primary onClick={this.updateCardInfo} type="button">
              <Icon name="check" />
              {' '}
              Update card
            </Button>

          </Form>
        </Modal.Content>
      </Modal>
    );
  }
}