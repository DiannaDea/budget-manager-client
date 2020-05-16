/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import { Checkbox, Segment, Grid } from 'semantic-ui-react';

export default class FilterBlock extends Component {
  render() {
    const { title, options } = this.props;

    return (
      <Segment>
        <Grid divided="vertically">
          <Grid.Row columns={1}>
            <Grid.Column>
              <p>{title}</p>
            </Grid.Column>
          </Grid.Row>
        </Grid>

        {
          options.map((option) => (
            <Grid.Row columns={1}>
              <Grid.Column>
                <Checkbox label={option.value} defaultChecked />
              </Grid.Column>
            </Grid.Row>
          ))
        }
      </Segment>
    );
  }
}
