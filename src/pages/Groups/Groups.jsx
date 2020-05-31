/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import { Grid, Header } from 'semantic-ui-react';
import { withTranslation } from 'react-i18next';
import JoinGroup from '../../components/Groups/JoinGroup';
import GroupsList from '../../components/Groups/GroupsList';

export default withTranslation()(class Groups extends Component {
  render() {
    const { groups, t } = this.props;

    return (
      <Grid>

        <Grid.Row columns={1} textAlign="center">
          <Grid.Column>
            <Header as="h2">{t('groupsTab')}</Header>
          </Grid.Column>
        </Grid.Row>

        <Grid.Row columns={1} textAlign="center" centered>
          <Grid.Column width="10">
            <JoinGroup />
          </Grid.Column>

        </Grid.Row>

        <Grid.Row columns={1} textAlign="center" centered>
          <Grid.Column width="10">
            <GroupsList groups={groups} />
          </Grid.Column>
        </Grid.Row>

      </Grid>
    );
  }
});
