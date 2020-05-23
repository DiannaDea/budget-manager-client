/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import { Form, Input } from 'semantic-ui-react';
import DatePicker from 'react-datepicker';
import GroupsSelect from '../ConnectCardModal/GroupsSelect';

export default class CreateGoalForm extends React.Component {
  render() {
    const {
      groupId, name, description, amount,
      savePerMonth, handleInputChange,
      dateStart, dateEnd,
      errorField, errorMessage,
    } = this.props;

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
          label="Name"
          placeholder="Name"
          defaultValue={name}
          onChange={(e, { value }) => handleInputChange('name', value)}
          {...(errorField === 'name' ? { error } : {})}
        />

        <Form.Field
          control={Input}
          label="Description"
          placeholder="Description"
          defaultValue={description}
          onChange={(e, { value }) => handleInputChange('description', value)}
          {...(errorField === 'description' ? { error } : {})}
        />

        <Form.Field
          control={Input}
          type="number"
          label="Amount"
          placeholder="Amount"
          defaultValue={amount}
          onChange={(e, { value }) => handleInputChange('amount', value)}
          {...(errorField === 'amount' ? { error } : {})}
        />

        <Form.Field
          control={Input}
          type="number"
          label="Save per month"
          placeholder="Save per month"
          defaultValue={savePerMonth}
          onChange={(e, { value }) => handleInputChange('savePerMonth', value)}
          {...(errorField === 'savePerMonth' ? { error } : {})}
        />

        <DatePicker
          dateFormat="MMMM d, yyyy"
          selected={new Date(dateStart)}
          onChange={(date) => handleInputChange('dateStart', date)}
        />

        <DatePicker
          dateFormat="MMMM d, yyyy"
          selected={new Date(dateEnd)}
          onChange={(date) => handleInputChange('dateEnd', date)}
        />

      </Form>
    );
  }
}
