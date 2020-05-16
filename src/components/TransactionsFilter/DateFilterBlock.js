import React, { Component } from 'react';
import { DateTime } from 'luxon';
import DatePicker from 'react-datepicker';

import { Segment, Grid } from 'semantic-ui-react';

class DateFilterBlock extends Component {
  handleChange = (date) => {
    console.log(date);
  }

  formatDate = (date) => {
    if (!date) {
      return null;
    }
    return DateTime
      .fromISO(date)
      .toFormat('DD.MM.YY');
  }

  render() {
    const { minDate, maxDate } = this.props;

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
            <DatePicker
              dateFormat="MMMM d, yyyy"
              selected={new Date(minDate)}
              onChange={this.handleChange}
            />
          </Grid.Column>
        </Grid.Row>


        <Grid.Row columns={1}>
          <Grid.Column>
            <DatePicker
              dateFormat="MMMM d, yyyy"
              selected={new Date(maxDate)}
              onChange={this.handleChange}
            />
          </Grid.Column>
        </Grid.Row>

      </Segment>
    );
  }
}

export default DateFilterBlock;
