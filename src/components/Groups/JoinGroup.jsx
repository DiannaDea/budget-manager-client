/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import {
  Segment, Grid, Form, Input, Button, Header,
} from 'semantic-ui-react';
import { withTranslation } from 'react-i18next';

class JoinGroup extends React.Component {
  render() {
    const { inviteCode = '', t } = this.props;

    return (
      <Segment>
        <Grid>

          <Grid.Row columns={1} textAlign="center">
            <Grid.Column>
              <Header as="h3">{t('joinGroupTitle')}</Header>
            </Grid.Column>
          </Grid.Row>


          <Grid.Row stretched columns={1} textAlign="center">
            <Grid.Column>
              <p>{t('joinGroupDescription')}</p>
            </Grid.Column>
          </Grid.Row>

          <Grid.Row stretched columns={1} textAlign="center">
            <Grid.Column>
              <Form>
                <Form.Field
                  control={Input}
                  placeholder={t('invitationCodeField')}
                  defaultValue={inviteCode}
                />
              </Form>
            </Grid.Column>
          </Grid.Row>

          <Grid.Row stretched columns={1} textAlign="center">
            <Grid.Column>
              <Button color="green">{t('checkCodeBtn')}</Button>
            </Grid.Column>
          </Grid.Row>

        </Grid>
      </Segment>
    );
  }
}

export default withTranslation()(JoinGroup);
