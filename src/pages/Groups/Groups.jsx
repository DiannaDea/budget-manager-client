/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import { Grid, Header } from 'semantic-ui-react';
import JoinGroup from '../../components/Groups/JoinGroup';
import GroupsList from '../../components/Groups/GroupsList';

export default class Groups extends Component {
  render() {
    const { groups } = this.props;

    return (
      <Grid>

        <Grid.Row columns={1} textAlign="center">
          <Grid.Column>
            <Header as="h2">Groups</Header>
          </Grid.Column>
        </Grid.Row>

        <Grid.Row columns={2}>
          <Grid.Column floated="left" width={9}>
            <GroupsList groups={groups} />
          </Grid.Column>
          <Grid.Column floated="right" width={7}>
            <JoinGroup />
          </Grid.Column>
        </Grid.Row>

      </Grid>
    );
  }
}
