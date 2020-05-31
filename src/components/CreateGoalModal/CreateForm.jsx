/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import { Form, Input, Grid } from 'semantic-ui-react';
import { withTranslation } from 'react-i18next';
import DatePicker from 'react-datepicker';
import GroupsSelect from '../ConnectCardModal/GroupsSelect';

export default withTranslation()(class CreateGoalForm extends React.Component {
  render() {
    const {
      groupId, name, description, amount,
      savePerMonth, handleInputChange,
      dateStart, dateEnd,
      errorField, errorMessage, t,
    } = this.props;

    const error = {
      content: errorMessage,
      pointing: 'above',
    };

    return (
      <Form>
        <Grid>
          <Grid.Row columns={2}>
            <Grid.Column>

              <GroupsSelect
                selectedGroup={groupId}
                handleGroupSelect={(e, { value }) => handleInputChange('groupId', value)}
                {...(errorField === 'groupId' && { selectGroupError: errorMessage })}
              />

              <Form.Field
                control={Input}
                label={t('goalName')}
                placeholder={t('goalName')}
                defaultValue={name}
                onChange={(e, { value }) => handleInputChange('name', value)}
                {...(errorField === 'name' ? { error } : {})}
              />

              <Form.Field
                control={Input}
                label={t('goalDescriprion')}
                placeholder={t('goalDescriprion')}
                defaultValue={description}
                onChange={(e, { value }) => handleInputChange('description', value)}
                {...(errorField === 'description' ? { error } : {})}
              />

              <Form.Field
                control={Input}
                type="number"
                label={t('goalAmount')}
                placeholder={t('goalAmount')}
                defaultValue={amount}
                onChange={(e, { value }) => handleInputChange('amount', value)}
                {...(errorField === 'amount' ? { error } : {})}
              />

              <Form.Field
                control={Input}
                type="number"
                label={t('goalSavePerMonth')}
                placeholder={t('goalSavePerMonth')}
                defaultValue={savePerMonth}
                onChange={(e, { value }) => handleInputChange('savePerMonth', value)}
                {...(errorField === 'savePerMonth' ? { error } : {})}
              />


            </Grid.Column>
            <Grid.Column>

              <div className="field">
                <label>{t('goalStartDate')}</label>
                <DatePicker
                  dateFormat="MMMM d, yyyy"
                  selected={new Date(dateStart)}
                  onChange={(date) => handleInputChange('dateStart', date)}
                />
              </div>

              <div className="field">
                <label>{t('goalEndDate')}</label>
                <DatePicker
                  dateFormat="MMMM d, yyyy"
                  selected={new Date(dateEnd)}
                  onChange={(date) => handleInputChange('dateEnd', date)}
                />
              </div>

            </Grid.Column>
          </Grid.Row>
        </Grid>

      </Form>
    );
  }
});
