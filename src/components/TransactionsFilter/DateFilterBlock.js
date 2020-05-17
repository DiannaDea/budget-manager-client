/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import DatePicker from 'react-datepicker';

import { Segment, Grid } from 'semantic-ui-react';

class DateFilterBlock extends Component {
  render() {
    const { minDate, maxDate, handleDateChange } = this.props;

    return (
      <Segment>
        <Grid divided="vertically">
          <Grid.Row columns={1}>
            <Grid.Column>
              <p>Date</p>
            </Grid.Column>
          </Grid.Row>
        </Grid>

        <Grid.Row columns={1}>
          <Grid.Column>
            <p>From</p>
            <DatePicker
              dateFormat="MMMM d, yyyy"
              selected={new Date(minDate)}
              onChange={(date) => handleDateChange(date, 'min')}
            />
          </Grid.Column>
        </Grid.Row>


        <Grid.Row columns={1}>
          <Grid.Column>
            <p>To</p>
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

export default DateFilterBlock;
