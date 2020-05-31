/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { Form, Input } from 'semantic-ui-react';
import { withTranslation } from 'react-i18next';
import GroupsSelect from '../ConnectCardModal/GroupsSelect';
import CategoriesDropdown from './CategoriesDropdown';

const CreateTransactionForm = (props) => {
  const {
    groupId, operationAmount, description, categoryId, handleInputChange,
    errorField, errorMessage, t,
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
        label={t('amountLabel')}
        placeholder={t('amountLabel')}
        type="number"
        defaultValue={operationAmount}
        onChange={(e, { value }) => handleInputChange('operationAmount', value)}
        {...(errorField === 'operationAmount' ? { error } : {})}
      />

      <Form.Field
        control={Input}
        label={t('descriptionLabel')}
        placeholder={t('descriptionLabel')}
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

export default withTranslation()(CreateTransactionForm);
