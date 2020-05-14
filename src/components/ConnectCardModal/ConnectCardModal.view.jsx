/* eslint-disable react/jsx-props-no-spreading */
import React, { Component } from 'react';
import { Button, Icon, Modal } from 'semantic-ui-react';
import ConnectCardStep from '../ConnectCardStep';
import BankForm from './forms/BankForm';
import ChooseGroupForm from './forms/ChooseGroupForm';

const MODAL_CONTENT = {
  1: ({
    currentBank, handleBankChange, validateCard, ...props
  }) => (
    <BankForm
      currentBank={currentBank}
      handleBankChange={handleBankChange}
      validateCard={validateCard}
      {...props}
    />
  ),
  2: () => <ChooseGroupForm />,
};

export default class ConnectCardModal extends Component {
  state = {
    modalOpen: false,
    activeStep: 1,
    currentBank: 'privatbank',
    cardInfo: {
      privatbank: {
        merchantId: '',
        password: '',
        cardNumber: '',
      },
      monobank: {
        token: '',
        cardNumber: '',
      },
    },
  }

  handleModalOpen = () => this.setState({ modalOpen: true })

  handleModalClose = () => this.setState({
    modalOpen: false,
    activeStep: 1,
    currentBank: 'privatbank',
  })

  validateCard = (activeStep) => this.setState({ activeStep })

  handleBankChange = (event, { value: bank }) => {
    this.setState({ currentBank: bank });
  }

  handleInputChange = (field, value) => {
    const { currentBank, cardInfo } = this.state;

    this.setState({
      cardInfo: {
        ...cardInfo,
        [currentBank]: {
          ...cardInfo[currentBank],
          [field]: value,
        },
      },
    });
  }

  render() {
    const {
      modalOpen, activeStep, currentBank, cardInfo,
    } = this.state;

    return (
      <Modal
        trigger={<Button onClick={this.handleModalOpen}>Connect card</Button>}
        open={modalOpen}
        onClose={this.handleModalClose}
        size="small"
      >
        <Modal.Header>Connect your card</Modal.Header>
        <Modal.Content>
          <ConnectCardStep activeStep={activeStep} />
          <Modal.Description>
            {
              MODAL_CONTENT[activeStep]({
                currentBank,
                handleBankChange: this.handleBankChange,
                validateCard: () => this.validateCard(2),
                handleInputChange: this.handleInputChange,
                ...cardInfo[currentBank],
              })
            }
          </Modal.Description>
        </Modal.Content>
        <Modal.Actions>
          <Button color="green" onClick={this.handleModalClose} inverted>
            <Icon name="checkmark" />
            {' '}
            Got it
          </Button>
        </Modal.Actions>
      </Modal>
    );
  }
}
