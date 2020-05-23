/* eslint-disable no-underscore-dangle */
/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import { DateTime } from 'luxon';
import {
  Card, Button, Grid, Image, Icon,
} from 'semantic-ui-react';
import CardRow from './CardRow';
import DeleteGoalModal from './DeleteGoalModal';

class GoalCard extends React.Component {
  getDate = (date) => DateTime
    .fromISO(date)
    .toFormat('dd.MM.yyyy')

  render() {
    const { goal, viewGoalProgress } = this.props;

    return (
      <Card>
        <Card.Content>
          <Image
            as={Icon}
            name="users"
            floated="left"
            size="big"
            circular
            color="grey"
            inverted
          />
          <Card.Header>{ goal.goal.name }</Card.Header>
          <Card.Meta>{goal.goal.description}</Card.Meta>
        </Card.Content>
        <Card.Content>
          <CardRow leftText="Goal start" rightText={this.getDate(goal.goal.dateStart)} />
          <CardRow leftText="Goal end" rightText={this.getDate(goal.goal.dateEnd)} />
        </Card.Content>
        <Card.Content>
          <CardRow leftText="Amount" rightText={`${goal.goal.amount} UAH`} />
        </Card.Content>
        <Card.Content>
          <Grid>
            <Grid.Row columns={2}>
              <Grid.Column>
                <Button fluid color="blue" onClick={() => viewGoalProgress(goal.goal._id)}>Progress</Button>
              </Grid.Column>
              <Grid.Column>
                <DeleteGoalModal goal={goal} />
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Card.Content>
      </Card>
    );
  }
}

export default GoalCard;
