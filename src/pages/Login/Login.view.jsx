/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import { Grid } from 'semantic-ui-react';
import LoginForm from '../../components/LoginForm';

export default class Login extends React.Component {
  render() {
    return (
      <div>
        <Grid padded relaxed>
          <Grid.Row columns={1}>
            <Grid.Column width="4" />
            <Grid.Column width="8">
              <LoginForm />
            </Grid.Column>
            <Grid.Column width="4" />
          </Grid.Row>
        </Grid>
      </div>
    );
  }
}
