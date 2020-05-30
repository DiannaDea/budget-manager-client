/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import {
  Segment, Grid, Form, Input, Button, Header,
} from 'semantic-ui-react';

class JoinGroup extends React.Component {
  render() {
    const { inviteCode = '' } = this.props;

    return (
      <Segment>
        <Grid>

          <Grid.Row columns={1} textAlign="center">
            <Grid.Column>
              <Header as="h3">Join group</Header>
            </Grid.Column>
          </Grid.Row>


          <Grid.Row stretched columns={1} textAlign="center">
            <Grid.Column>
              <p>Enter invitation code to join group</p>
            </Grid.Column>
          </Grid.Row>

          <Grid.Row stretched columns={1} textAlign="center">
            <Grid.Column>
              <Form>
                <Form.Field
                  control={Input}
                  placeholder="Invitation code"
                  defaultValue={inviteCode}
                />
              </Form>
            </Grid.Column>
          </Grid.Row>

          <Grid.Row stretched columns={1} textAlign="center">
            <Grid.Column>
              <Button>Check code</Button>
            </Grid.Column>
          </Grid.Row>

        </Grid>
      </Segment>
    );
  }
}

export default JoinGroup;
