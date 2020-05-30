/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import {
  Grid, Icon, Image, Button, Segment, Card,
} from 'semantic-ui-react';

const Row = ({ leftText, rightText }) => (
  <Card.Description>
    <Grid>
      <Grid.Row columns={2}>
        {
          (leftText)
            ? (
              <Grid.Column width={3}>
                <p>{leftText}</p>
              </Grid.Column>
            )
            : null
        }
        <Grid.Column width={8}>
          <p>{rightText}</p>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  </Card.Description>
);

class GroupRow extends React.Component {
  render() {
    const { group } = this.props;

    return (
      <Segment>
        <Grid>
          <Grid.Row columns={3} textAlign="center">

            <Grid.Column width={3} stretched>
              <Image
                as={Icon}
                name={!group.accessLevel ? 'lock' : 'lock open'}
                floated="left"
                size="huge"
                circular
                color="grey"
              />
            </Grid.Column>

            <Grid.Column width={10} textAlign="left" stretched>
              <Row rightText={group.name} />
              {
                  (group.accessLevel)
                    ? <Row rightText={group.users.length} leftText="Members" />
                    : null
                }
            </Grid.Column>

            <Grid.Column width={3}>
              <Button icon>
                More
                <Icon name="angle right" />
              </Button>
            </Grid.Column>

          </Grid.Row>
        </Grid>
      </Segment>
    );
  }
}

export default GroupRow;
