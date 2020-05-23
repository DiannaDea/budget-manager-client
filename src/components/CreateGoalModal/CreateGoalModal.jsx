/* eslint-disable react/no-did-update-set-state */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/jsx-props-no-spreading */
import React, { Component } from 'react';
import { DateTime } from 'luxon';
import * as Yup from 'yup';
import {
  Button, Icon, Modal, Message,
} from 'semantic-ui-react';
import CreateGoalForm from './CreateForm';

const createGoalValidation = Yup.object().shape({
  dateEnd: Yup.string()
    .required('End date is required'),
  dateStart: Yup.string()
    .required('Start date is required'),
  savePerMonth: Yup.string()
    .required('Save per month is required'),
  amount: Yup.string()
    .required('Amount is required'),
  name: Yup.string()
    .required('Name is required'),
  description: Yup.string()
    .required('Description is required'),
  groupId: Yup.string()
    .required('Group is required'),
});

const initialState = {
  modalOpen: false,
  groupId: '',
  name: '',
  description: '',
  amount: '',
  savePerMonth: '',
  dateStart: DateTime.local().toFormat('yyyy-MM-dd'),
  dateEnd: DateTime.local().toFormat('yyyy-MM-dd'),
  errorField: null,
  errorMessage: null,
};

export default class CreateGoalModal extends Component {
  state = {
    ...initialState,
  }


  handleOpen = () => this.setState({ modalOpen: true })

  handleClose = () => {
    const { resetSavedGoal } = this.props;
    this.setState({ ...initialState });
    resetSavedGoal();
  }

  handleInputChange = (type, value) => {
    if (type === 'dateStart' || type === 'dateEnd') {
      const newDate = (new Date(value)).toISOString();

      this.setState({
        [type]: DateTime.fromISO(newDate).toFormat('yyyy-MM-dd'),
      });
    } else {
      this.setState({
        [type]: value,
      });
    }
  }

  saveGoal = () => {
    const { createGoal } = this.props;

    const payload = {
      groupId: this.state.groupId,
      name: this.state.name,
      description: this.state.description,
      amount: this.state.amount,
      savePerMonth: this.state.savePerMonth,
      dateStart: this.state.dateStart,
      dateEnd: this.state.dateEnd,
    };

    createGoalValidation.validate(payload)
      .then(() => {
        createGoal(payload);
        this.setState({
          errorField: null,
          errorMessage: null,
        });
      })
      .catch((err) => {
        this.setState({
          errorField: err.path,
          errorMessage: err.message,
        });
      });
  }

  render() {
    const { goalsChanged } = this.props;
    const { modalOpen } = this.state;

    return (
      <Modal
        trigger={(
          <Button color="green" circular floated="right" onClick={this.handleOpen}>
            <Icon name="add" />
            Create goal
          </Button>
        )}
        open={modalOpen}
        onClose={this.handleClose}
        size="small"
      >
        <Modal.Header>Create financial goal</Modal.Header>
        <Modal.Content>

          {
            (goalsChanged)
              ? (
                <Message
                  success
                  header="Success!"
                  content="Financial goal was added"
                />
              )
              : null
          }

          <CreateGoalForm
            {...this.state}
            handleInputChange={this.handleInputChange}
          />
        </Modal.Content>

        <Modal.Content>
          <Button
            fluid
            primary
            onClick={this.saveGoal}
            disabled={goalsChanged}
          >
            <Icon name="check" />
            {' '}
            Create
          </Button>
        </Modal.Content>

        <Modal.Actions>
          <Button onClick={this.handleClose} color="grey">
            <Icon name="close" />
            {' '}
            Close
          </Button>
        </Modal.Actions>
      </Modal>
    );
  }
}
