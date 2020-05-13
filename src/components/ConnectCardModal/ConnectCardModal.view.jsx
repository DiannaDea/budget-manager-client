/* eslint-disable react/jsx-props-no-spreading */
import React, { Component } from 'react';
import { Button, Icon, Modal } from 'semantic-ui-react';
import ConnectCardStep from '../ConnectCardStep';
import BankForm from './forms/BankForm';

const MODAL_CONTENT = {
  1: ({ currentBank, handleBankChange, validateCard }) => (
    <BankForm
      currentBank={currentBank}
      handleBankChange={handleBankChange}
      validateCard={validateCard}
    />
  ),
  2: () => <p>Step 2</p>,
};

export default class ConnectCardModal extends Component {
  state = {
    modalOpen: false,
    activeStep: 1,
    currentBank: 'privatbank',
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

  render() {
    const { modalOpen, activeStep, currentBank } = this.state;

    return (
      <Modal
        trigger={<Button onClick={this.handleModalOpen}>Connect card</Button>}
        open={modalOpen}
        onClose={this.handleModalClose}
        size="small"
      >
        <Modal.Header>Select a Photo</Modal.Header>
        <Modal.Content>
          <ConnectCardStep activeStep={activeStep} />
          <Modal.Description>
            {
              MODAL_CONTENT[activeStep]({
                currentBank,
                handleBankChange: this.handleBankChange,
                validateCard: () => this.validateCard(2),
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
