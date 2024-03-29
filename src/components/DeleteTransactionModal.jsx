/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/destructuring-assignment */
import { connect } from 'react-redux';
import React, { Component } from 'react';
import { withTranslation } from 'react-i18next';
import {
  Button, Icon, Modal,
} from 'semantic-ui-react';
import { deleteTransactionRequest, resetSavedTransaction } from '../redux/actions/transactions';

class DeleteTransactionModal extends Component {
  state = {
    modalOpen: false,
  }

  handleOpen = () => this.setState({ modalOpen: true })

  handleClose = () => {
    const { resetSavedTransaction: reset } = this.props;

    this.setState({ modalOpen: false });
    reset();
  }

  deleteTransactionInfo = () => {
    const { transactionId, deleteTransaction } = this.props;

    deleteTransaction({
      transactionId,
    });
    this.handleClose();
  }

  render() {
    const { t } = this.props;

    return (
      <Modal
        trigger={(
          <Button icon onClick={this.handleOpen}>
            <Icon name="trash alternate outline" />
          </Button>
)}
        open={this.state.modalOpen}
        onClose={this.handleClose}
        size="mini"
      >
        <Modal.Header>{t('deleteTransactionTitle')}</Modal.Header>

        <Modal.Content>
          <p>
            {t('deleteTransactionDescription')}
          </p>
        </Modal.Content>
        <Modal.Actions>
          <Button color="red" inverted onClick={this.handleClose}>
            <Icon name="remove" />
            {' '}
            {t('btnNo')}
          </Button>
          <Button color="green" inverted onClick={this.deleteTransactionInfo}>
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
  deleteTransaction: (payload) => dispatch(deleteTransactionRequest(payload)),
  resetSavedTransaction: (payload) => dispatch(resetSavedTransaction(payload)),
});

export default withTranslation()(connect(() => ({}), mapDispatchToProps)(DeleteTransactionModal));
