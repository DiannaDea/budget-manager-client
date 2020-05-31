/* eslint-disable no-underscore-dangle */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/destructuring-assignment */
import { connect } from 'react-redux';
import React, { Component } from 'react';
import {
  Button, Icon, Modal,
} from 'semantic-ui-react';
import { withTranslation } from 'react-i18next';
import { deleteGoalRequest } from '../redux/actions/goals';

class DeleteGoalModal extends Component {
  state = {
    modalOpen: false,
  }

  handleOpen = () => this.setState({ modalOpen: true })

  handleClose = () => {
    this.setState({ modalOpen: false });
  }

  deleteGoal = () => {
    const { goal, deleteGoal } = this.props;
    deleteGoal({ goalId: goal.goal._id });
    this.handleClose();
  }

  render() {
    const { goal, t } = this.props;

    return (
      <Modal
        trigger={<Button fluid color="red" onClick={this.handleOpen}>{t('deleteBtn')}</Button>}
        open={this.state.modalOpen}
        onClose={this.handleClose}
        size="mini"
      >
        <Modal.Header>{t('deleteGoalTitle')}</Modal.Header>

        <Modal.Content>
          <p>
            {t('deleteGoalMessage')}
            {' '}
            {(goal) ? goal.goal.name : ''}
            ?
          </p>
        </Modal.Content>
        <Modal.Actions>
          <Button color="red" inverted onClick={this.handleClose}>
            <Icon name="remove" />
            {' '}
            {t('btnNo')}
          </Button>
          <Button color="green" inverted onClick={this.deleteGoal}>
            <Icon name="checkmark" />
            {' '}
            {t('btnYes')}
          </Button>
        </Modal.Actions>
      </Modal>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  deleteGoal: (payload) => dispatch(deleteGoalRequest(payload)),
});

export default withTranslation()(connect(() => ({}), mapDispatchToProps)(DeleteGoalModal));
