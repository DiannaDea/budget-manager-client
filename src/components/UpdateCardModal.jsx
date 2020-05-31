/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react';
import {
  Button, Form, Icon, Modal,
} from 'semantic-ui-react';
import { withTranslation } from 'react-i18next';
import GroupsSelect from './ConnectCardModal/GroupsSelect';

export default withTranslation()(class UpdateCardModal extends Component {
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
    const { t } = this.props;

    return (
      <Modal
        trigger={<Button fluid color="blue" onClick={this.handleOpen}>{t('editBtn')}</Button>}
        open={this.state.modalOpen}
        onClose={this.handleClose}
        size="mini"
      >
        <Modal.Header>{t('editCardTitle')}</Modal.Header>

        <Modal.Content>
          <Form success>

            <GroupsSelect
              selectedGroup={this.state.selectedGroup}
              handleGroupSelect={this.handleGroupSelect}
            />

            <Button fluid primary onClick={this.updateCardInfo} type="button">
              <Icon name="check" />
              {' '}
              {t('saveBtn')}
            </Button>

          </Form>
        </Modal.Content>
      </Modal>
    );
  }
});
