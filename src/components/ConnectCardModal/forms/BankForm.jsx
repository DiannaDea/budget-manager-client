/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import * as Yup from 'yup';
import { Button } from 'semantic-ui-react';
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
      .then(() => validateCard())
      .catch((err) => {
        this.setState({
          errorField: err.path,
          errorMessage: err.message,
        });
      });
  }

  render() {
    const { currentBank, handleBankChange, ...props } = this.props;

    const BANK_FORM = {
      privatbank: <PrivatBankForm {...props} {...this.state} />,
      monobank: <MonobankForm {...props} {...this.state} />,
    };

    return (
      <>
        <BankSelect currentBank={currentBank} handleBankChange={handleBankChange} />
        { BANK_FORM[currentBank] }
        <Button onClick={this.validateForm}>Validate card</Button>
      </>
    );
  }
}

export default BankForm;
