/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/no-access-state-in-setstate */
/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react';
import * as Yup from 'yup';
import {
  Button, Icon, Modal, Message,
} from 'semantic-ui-react';
import CreateTransactionForm from './CreateForm';

const createTransactionValidation = Yup.object().shape({
  categoryId: Yup.string()
    .required('Category is required'),
  description: Yup.string()
    .required('Description is required'),
  operationAmount: Yup.number()
    .required('Amount is required'),
  groupId: Yup.string()
    .required('Group is required'),
});

const initialState = {
  modalOpen: false,
  groupId: null,
  categoryId: null,
  operationAmount: null,
  description: null,
  errorField: null,
  errorMessage: null,
};

export default class CreateTransactionModal extends Component {
  state = {
    ...initialState,
  }

  handleOpen = () => this.setState({ modalOpen: true })

  handleClose = () => {
    const { resetSavedTransaction } = this.props;
    this.setState(initialState);
    resetSavedTransaction();
  }

  handleInputChange = (type, value) => {
    this.setState({
      [type]: value,
    });
  }

  saveTransaction = () => {
    const { saveTransaction } = this.props;

    const info = {
      operationAmount: this.state.operationAmount,
      description: this.state.description,
      groupId: this.state.groupId,
      categoryId: this.state.categoryId,
    };

    createTransactionValidation.validate(info)
      .then(() => {
        saveTransaction({
          ...info,
          currency: 'UAH',
        });
        this.setState({
          errorField: null,
          errorMessage: null,
        });
      })
      .catch((err) => {
        const { path, message } = err;

        this.setState({
          errorField: path,
          errorMessage: message,
        });
      });
  }

  render() {
    const { modalOpen } = this.state;
    const { newTransactionAdded } = this.props;

    return (
      <Modal
        trigger={(
          <Button color="green" circular floated="right" onClick={this.handleOpen}>
            <Icon name="add" />
            Create
          </Button>
        )}
        open={modalOpen}
        onClose={this.handleClose}
        size="small"
      >
        <Modal.Header>Create transaction</Modal.Header>

        <Modal.Content>
          {
            (newTransactionAdded)
              ? (
                <Message
                  success
                  header="Success!"
                  content="Transaction was successfully created"
                />
              )
              : null
          }

          <CreateTransactionForm
            {...this.state}
            handleInputChange={this.handleInputChange}
          />
        </Modal.Content>

        <Modal.Content>
          <Button fluid primary onClick={this.saveTransaction} disabled={!!newTransactionAdded}>
            <Icon name="check" />
            {' '}
            Save transaction
          </Button>
        </Modal.Content>

        <Modal.Actions>
          <Button color="green" onClick={this.handleClose} inverted>
            <Icon name="checkmark" />
            {' '}
            Got it
          </Button>
        </Modal.Actions>
      </Modal>
    );
  }
}
