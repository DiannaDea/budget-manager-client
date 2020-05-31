/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import * as Yup from 'yup';
import { Button, Form, Icon } from 'semantic-ui-react';
import { withTranslation } from 'react-i18next';
import BankSelect from '../BankSelect';
import MonobankForm from './MonobankForm';
import PrivatBankForm from './PrivatBankForm';

const monobankValidation = Yup.object().shape({
  token: Yup.string()
    .required('Token is required'),
  cardNumber: Yup.string()
    .required('Card is required'),
});

const privatBankValidation = Yup.object().shape({
  password: Yup.string()
    .required('Password is required'),
  merchantId: Yup.string()
    .required('MerchantId is required'),
  cardNumber: Yup.string()
    .required('Card is required'),
});

const VALIDATION_SCHEMAS = {
  privatbank: privatBankValidation,
  monobank: monobankValidation,
};
class BankForm extends React.Component {
  state = {
    errorField: null,
    errorMessage: null,
  }

  validateForm = () => {
    const { validateCard, currentBank } = this.props;

    VALIDATION_SCHEMAS[currentBank].validate(this.props)
      .then(() => {
        validateCard();
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
    const {
      currentBank, handleBankChange, t, ...props
    } = this.props;

    const BANK_FORM = {
      privatbank: <PrivatBankForm {...props} {...this.state} />,
      monobank: <MonobankForm {...props} {...this.state} />,
    };

    return (
      <Form>
        <BankSelect currentBank={currentBank} handleBankChange={handleBankChange} />
        { BANK_FORM[currentBank] }
        <Button fluid onClick={this.validateForm} primary>
          <Icon name="checkmark" />
          {' '}
          {t('validateCardBtn')}
        </Button>
      </Form>
    );
  }
}

export default withTranslation()(BankForm);
