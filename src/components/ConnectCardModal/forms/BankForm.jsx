import React from 'react';
import { Button } from 'semantic-ui-react';
import BankSelect from '../BankSelect';
import MonobankForm from './MonobankForm';
import PrivatBankForm from './PrivatBankForm';

const BankForm = ({ currentBank, handleBankChange, validateCard }) => {
  const BANK_FORM = {
    privatbank: <PrivatBankForm />,
    monobank: <MonobankForm />,
  };

  return (
    <>
      <BankSelect currentBank={currentBank} handleBankChange={handleBankChange} />
      { BANK_FORM[currentBank] }
      <Button onClick={validateCard}>Validate card</Button>
    </>
  );
};

export default BankForm;
