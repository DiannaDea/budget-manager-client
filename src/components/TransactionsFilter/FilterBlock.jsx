/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import { Checkbox, Segment, Grid } from 'semantic-ui-react';

export default class FilterBlock extends Component {
  render() {
    const {
      title, type, options, handleCheckBoxChange,
    } = this.props;

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
          options.map((option) => {
            if (!option.value) {
              return null;
            }
            return (
              <Grid.Row columns={1} key={option.key}>
                <Grid.Column>
                  <Checkbox
                    id={option.key}
                    name={type}
                    checked={option.applied}
                    label={option.value}
                    onChange={handleCheckBoxChange}
                  />
                </Grid.Column>
              </Grid.Row>
            );
          }).filter(Boolean)
        }
      </Segment>
    );
  }
}
