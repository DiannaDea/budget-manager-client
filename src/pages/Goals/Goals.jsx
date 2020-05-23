/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import { Grid, Header, Message } from 'semantic-ui-react';

export default class Goals extends React.Component {
  render() {
    const { goals = [] } = this.props;

    return (
      <Grid>
        <Grid.Row columns={1} textAlign="center">
          <Grid.Column>
            <Header as="h2">Goals</Header>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row columns={3} centered>
          {
            (!goals.length)
              ? (
                <Message
                  header="Ooops... No goals created yet!"
                />
              )
              : null
          }
        </Grid.Row>
      </Grid>
    );
  }
}
