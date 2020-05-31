/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/no-access-state-in-setstate */
/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react';
import * as Yup from 'yup';
import {
  Button, Icon, Modal, Message,
} from 'semantic-ui-react';
import { withTranslation } from 'react-i18next';
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

const defaulTransactionInfo = {
  groupId: null,
  categoryId: null,
  operationAmount: null,
  description: null,
};

const mapping = {
  create: {
    trigger: (handleOpen, t) => (
      <Button color="green" circular floated="right" onClick={handleOpen}>
        <Icon name="add" />
        {t('createTransaction')}
      </Button>
    ),
    header: (t) => t('createTransactionTittle'),
    successMessage: (t) => t('createTransactionSuccess'),
    saveAction: ({ saveTransaction }) => saveTransaction(),
    disabled: ({ transactionsChanged }) => !!transactionsChanged,
    saveBtnText: (t) => t('saveTransactionBtn'),
  },
  update: {
    trigger: (handleOpen) => (
      <Button icon onClick={handleOpen}>
        <Icon name="edit outline" />
      </Button>
    ),
    header: (t) => t('updateTransactionTittle'),
    successMessage: (t) => t('updateTransactionSuccess'),
    saveAction: ({ updateTransactionInfo }) => updateTransactionInfo(),
    disabled: ({ transactionsChanged }) => !!transactionsChanged,
    saveBtnText: (t) => t('updateTransactionBtn'),
  },
};

export default withTranslation()(class CreateTransactionModal extends Component {
  state = {
    modalOpen: false,
    ...(this.props.transactionInfo ? this.props.transactionInfo : defaulTransactionInfo),
    errorField: null,
    errorMessage: null,
  }

  handleOpen = () => this.setState({ modalOpen: true })

  handleClose = () => {
    const { resetSavedTransaction } = this.props;
    this.setState(defaulTransactionInfo);
    this.setState({
      modalOpen: false,
      errorField: null,
      errorMessage: null,
    });
    resetSavedTransaction();
  }

  handleInputChange = (type, value) => {
    this.setState({
      [type]: value,
    });
  }

  validate = () => {
    const info = {
      operationAmount: this.state.operationAmount,
      description: this.state.description,
      groupId: this.state.groupId,
      categoryId: this.state.categoryId,
    };

    return createTransactionValidation.validate(info)
      .then(() => {
        this.setState({
          errorField: null,
          errorMessage: null,
        });
        return info;
      })
      .catch((err) => {
        const { path, message } = err;

        this.setState({
          errorField: path,
          errorMessage: message,
        });
      });
  }

  saveTransaction = () => {
    const { saveTransaction } = this.props;

    this.validate()
      .then((info) => {
        saveTransaction({
          ...info,
          currency: 'UAH',
        });
      });
  }

  updateTransactionInfo = () => {
    const { updateTransaction } = this.props;

    this.validate()
      .then((info) => {
        updateTransaction({
          transactionId: this.state.id,
          ...info,
          currency: 'UAH',
        });
      });
  }

  render() {
    const { modalOpen } = this.state;
    const { transactionsChanged, action = 'create', t } = this.props;

    const config = mapping[action];

    return (
      <Modal
        trigger={config.trigger(this.handleOpen, t)}
        open={modalOpen}
        onClose={this.handleClose}
        size="small"
      >
        <Modal.Header>{config.header(t)}</Modal.Header>

        <Modal.Content>
          {
            (transactionsChanged)
              ? (
                <Message
                  success
                  header="Success!"
                  content={config.successMessage(t)}
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
          <Button
            fluid
            primary
            onClick={() => config.saveAction(this)}
            disabled={config.disabled(this.props)}
          >
            <Icon name="check" />
            {' '}
            {config.saveBtnText(t)}
          </Button>
        </Modal.Content>

        <Modal.Actions>
          <Button onClick={this.handleClose} color="grey">
            <Icon name="checkmark" />
            {' '}
            {t('closeBtn')}
          </Button>
        </Modal.Actions>
      </Modal>
    );
  }
});
