/* eslint-disable react/no-did-update-set-state */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/jsx-props-no-spreading */
import React, { Component } from 'react';
import {
  Button, Icon, Modal, Message,
} from 'semantic-ui-react';
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
  2: (props) => <ChooseGroupForm {...props} />,
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
    selectedGroup: 'group1',
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.cardAuth !== this.props.cardAuth) {
      this.setState({ activeStep: prevState.activeStep + 1 });
    }
  }

  handleModalOpen = () => this.setState({ modalOpen: true })

  handleModalClose = () => this.setState({
    modalOpen: false,
    activeStep: 1,
    currentBank: 'privatbank',
  })

  validateCard = () => {
    const { authCard } = this.props;
    const { currentBank, cardInfo } = this.state;

    authCard({
      [currentBank]: cardInfo[currentBank],
    });
  }

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

  handleGroupSelect = (event, { value: group }) => {
    this.setState({ selectedGroup: group });
  }

  saveCardInfo = () => {
    const { saveCard, cardAuth } = this.props;
    // TODO: get groups from API
    // const { selectedGroup } = this.state;

    saveCard({
      groupId: '1', // selectedGroup
      cardNumber: cardAuth.cardNumber,
      bankId: cardAuth.bankId,
      authId: cardAuth.authId,
    });
  }

  render() {
    const {
      modalOpen, activeStep, currentBank, cardInfo, selectedGroup,
    } = this.state;
    const { cardAuth, savedCard, cardAuthError } = this.props;

    return (
      <Modal
        trigger={<Button onClick={this.handleModalOpen}>Connect card</Button>}
        open={modalOpen}
        onClose={this.handleModalClose}
        size="small"
      >
        <Modal.Header>Connect your card</Modal.Header>
        <Modal.Content>
          <ConnectCardStep activeStep={activeStep} savedCard={savedCard} />
          {
            (cardAuthError)
              ? (
                <Message
                  negative
                  header="Ooops!"
                  content="Bank can not validate card. Please try again"
                />
              )
              : null
          }
          <Modal.Description>
            {
              MODAL_CONTENT[activeStep]({
                currentBank,
                selectedGroup,
                handleBankChange: this.handleBankChange,
                handleGroupSelect: this.handleGroupSelect,
                validateCard: () => this.validateCard(2),
                saveCardInfo: this.saveCardInfo,
                handleInputChange: this.handleInputChange,
                ...cardInfo[currentBank],
                cardAuth,
                ...this.props,
              })
            }
          </Modal.Description>
        </Modal.Content>
        <Modal.Actions>
          <Button onClick={this.handleModalClose} color="grey">
            <Icon name="close" />
            {' '}
            Close
          </Button>
        </Modal.Actions>
      </Modal>
    );
  }
}
