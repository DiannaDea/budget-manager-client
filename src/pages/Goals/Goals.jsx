/* eslint-disable no-underscore-dangle */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/no-unused-state */
/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import {
  Grid, Header, Message, Form,
} from 'semantic-ui-react';
import GroupsSelect from '../../components/ConnectCardModal/GroupsSelect';
import GoalCard from '../../components/GoalCard';

export default class Goals extends React.Component {
  state = {
    selectedGroup: null,
  }

  componentDidMount() {
    const { location: { search } } = this.props;
    const searchRegex = /\?groupId=(?<groupId>[\w-]+)/;

    if (searchRegex.test(search)) {
      const { groups: { groupId } } = searchRegex.exec(search);
      this.setState({
        selectedGroup: groupId,
      });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    const { selectedGroup } = this.state;
    const { getGoals } = this.props;

    if (selectedGroup !== prevState.selectedGroup) {
      getGoals({ groupId: selectedGroup });
    }
  }


  viewGoalProgress = (goalId) => {
    const { selectedGroup } = this.state;
    const { history } = this.props;
    history.push(`/manager/goals/${goalId}?groupId=${selectedGroup}`);
  }

  handleGroupSelect = (event, { value: group }) => {
    this.setState({ selectedGroup: group });
  }

  render() {
    const { goals = [] } = this.props;

    return (
      <Grid>
        <Grid.Row columns={1} textAlign="center">
          <Grid.Column>
            <Header as="h2">Goals</Header>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row columns={1}>
          <Grid.Column textAlign="center">
            <Form>
              <GroupsSelect
                inline
                selectedGroup={this.state.selectedGroup}
                handleGroupSelect={this.handleGroupSelect}
              />
            </Form>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row columns={3} centered>
          {
            (!goals.length)
              ? (
                <Message
                  header="Please select group!"
                />
              )
              : null
          }
          {
          goals.map((goal) => (
            <Grid.Column key={goal.goal._id}>
              <GoalCard goal={goal} viewGoalProgress={this.viewGoalProgress} />
            </Grid.Column>
          ))
        }
        </Grid.Row>
      </Grid>
    );
  }
}
