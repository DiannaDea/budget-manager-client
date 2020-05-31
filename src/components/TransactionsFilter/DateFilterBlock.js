/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import { withTranslation } from 'react-i18next';
import DatePicker from 'react-datepicker';

import { Segment, Grid } from 'semantic-ui-react';

class DateFilterBlock extends Component {
  render() {
    const {
      minDate, maxDate, handleDateChange, t,
    } = this.props;

    return (
      <Segment>
        <Grid divided="vertically">
          <Grid.Row columns={1}>
            <Grid.Column>
              <p>{t('dateFilter')}</p>
            </Grid.Column>
          </Grid.Row>
        </Grid>

        <Grid.Row columns={1}>
          <Grid.Column>
            <p>{t('dateFrom')}</p>
            <DatePicker
              dateFormat="MMMM d, yyyy"
              selected={new Date(minDate)}
              onChange={(date) => handleDateChange(date, 'min')}
            />
          </Grid.Column>
        </Grid.Row>


        <Grid.Row columns={1}>
          <Grid.Column>
            <p>{t('dateTo')}</p>
            <DatePicker
              dateFormat="MMMM d, yyyy"
              selected={new Date(maxDate)}
              onChange={(date) => handleDateChange(date, 'max')}
            />
          </Grid.Column>
        </Grid.Row>

      </Segment>
    );
  }
}

export default withTranslation()(DateFilterBlock);
