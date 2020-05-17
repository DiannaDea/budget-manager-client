/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/no-access-state-in-setstate */
/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react';
import * as Yup from 'yup';
import { Button, Icon, Modal } from 'semantic-ui-react';
import CreateTransactionForm from './CreateForm';

const createTransactionValidation = Yup.object().shape({
  categoryId: Yup.string()
    .required('Category is required'),
  description: Yup.string()
    .required('Description is required'),
  amount: Yup.number()
    .required('Amount is required'),
  groupId: Yup.string()
    .required('Group is required'),
});

export default class CreateTransactionModal extends Component {
  state = {
    modalOpen: false,
    groupId: null,
    categoryId: null,
    amount: null,
    description: null,
    errorField: null,
    errorMessage: null,
  }

  handleOpen = () => this.setState({ modalOpen: true })

  handleClose = () => this.setState({ modalOpen: false })

  handleInputChange = (type, value) => {
    this.setState({
      [type]: value,
    });
  }

  saveTransaction = () => {
    const info = {
      amount: this.state.amount,
      description: this.state.description,
      groupId: this.state.groupId,
      categoryId: this.state.categoryId,
    };

    createTransactionValidation.validate(info)
      .then(() => {
        alert('Success');
        // saveCard({
        //   groupId: selectedGroup,
        //   cardNumber: cardAuth.cardNumber,
        //   bankId: cardAuth.bankId,
        //   authId: cardAuth.authId,
        // });
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
          <CreateTransactionForm
            {...this.state}
            handleInputChange={this.handleInputChange}
          />
        </Modal.Content>

        <Modal.Content>
          <Button fluid primary onClick={this.saveTransaction}>
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
