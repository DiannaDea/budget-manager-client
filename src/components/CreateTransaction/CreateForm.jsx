/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { Form, Input } from 'semantic-ui-react';
import GroupsSelect from '../ConnectCardModal/GroupsSelect';
import CategoriesDropdown from './CategoriesDropdown';

const CreateTransactionForm = (props) => {
  const {
    groupId, amount, description, categoryId, handleInputChange,
    errorField, errorMessage,
  } = props;

  const error = {
    content: errorMessage,
    pointing: 'above',
  };

  return (
    <Form>
      <GroupsSelect
        selectedGroup={groupId}
        handleGroupSelect={(e, { value }) => handleInputChange('groupId', value)}
        {...(errorField === 'groupId' && { selectGroupError: errorMessage })}
      />

      <Form.Field
        control={Input}
        label="Amount"
        placeholder="Amount"
        type="number"
        defaultValue={amount}
        onChange={(e, { value }) => handleInputChange('amount', value)}
        {...(errorField === 'amount' ? { error } : {})}
      />

      <Form.Field
        control={Input}
        label="Description"
        placeholder="Description"
        defaultValue={description}
        onChange={(e, { value }) => handleInputChange('description', value)}
        {...(errorField === 'description' ? { error } : {})}
      />

      <CategoriesDropdown
        selectedCategory={categoryId}
        handleCategorySelect={(e, { value }) => handleInputChange('categoryId', value)}
        {...(errorField === 'categoryId' && { selectCategoryError: errorMessage })}
      />

    </Form>
  );
};

export default CreateTransactionForm;
