/* eslint-disable no-param-reassign */
/* eslint-disable no-return-assign */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable no-underscore-dangle */
/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import { DateTime } from 'luxon';
import {
  Grid, Header, Divider, Button, Icon,
} from 'semantic-ui-react';
import { Line } from 'react-chartjs-2';
import CardRow from '../../components/CardRow';

const months = [
  'January', 'February', 'March', 'April', 'May',
  'June', 'July', 'August', 'September', 'October', 'November', 'December',
];

const chartColors = {
  red: 'rgb(255, 99, 132)',
  orange: 'rgb(255, 159, 64)',
  yellow: 'rgb(255, 205, 86)',
  green: 'rgb(75, 192, 192)',
  blue: 'rgb(54, 162, 235)',
  purple: 'rgb(153, 102, 255)',
  grey: 'rgb(201, 203, 207)',
};

const options = {
  responsive: true,
  title: {
    display: true,
    text: 'Financial goal progress',
  },
  tooltips: {
    mode: 'index',
    intersect: false,
  },
  hover: {
    mode: 'nearest',
    intersect: true,
  },
  scales: {
    x: {
      display: true,
      scaleLabel: {
        display: true,
        labelString: 'Month',
      },
    },
    y: {
      display: true,
      scaleLabel: {
        display: true,
        labelString: 'Value',
      },
    },
  },
};

const commonSettings = {
  fill: false,
};

export default class GoalProgress extends React.Component {
  getMonthLabels = (progress) => progress.map(({ month }) => months[month - 1])

  getDate = (date) => DateTime
    .fromISO(date)
    .toFormat('dd.MM.yyyy')

  getGoal = () => {
    const { goals, match: { params: { id: goalId } } } = this.props;
    return goals.find(({ goal }) => goal._id === goalId);
  }

  generateRealProgress = (progress) => ({
    label: 'Real progress',
    data: progress.map((p) => p.amountToSave),
    ...commonSettings,
    backgroundColor: chartColors.red,
    borderColor: chartColors.red,
  })

  generateIdealProgress = (progress) => ({
    label: 'Ideal progress',
    data: progress.map((p) => p.idealAmountToSave).filter(Boolean),
    ...commonSettings,
    backgroundColor: chartColors.green,
    borderColor: chartColors.green,
  })

  generareLiveProgress = (progress) => ({
    label: 'Live progress',
    data: progress.map((p) => p.amountSaved),
    ...commonSettings,
    backgroundColor: chartColors.yellow,
    borderColor: chartColors.yellow,
  })

  generateChart = (progress) => ({
    labels: this.getMonthLabels(progress),
    datasets: [
      this.generateIdealProgress(progress),
      this.generareLiveProgress(progress),
      this.generateRealProgress(progress),
    ],
  })

  generateDescription = (goal) => {
    if (!goal) {
      return [];
    }
    const alreadySaved = goal.progress.reduce((res, p) => res += p.amountSaved, 0);
    const saveMore = goal.goal.amount - alreadySaved;

    return [
      {
        leftText: 'Description',
        rightText: goal.goal.description,
      },
      {
        leftText: 'Amount',
        rightText: `${goal.goal.amount} UAH`,
      },
      {
        leftText: 'Already saved',
        rightText: `${alreadySaved} UAH`,
      },
      {
        leftText: 'Save more',
        rightText: `${saveMore} UAH`,
      },
      {
        leftText: 'Real save per month',
        rightText: `${goal.goal.savePerMonth} UAH`,
      },
      {
        leftText: 'Ideal save per month',
        rightText: `${Math.round(goal.progress[0].idealAmountToSave, 2)} UAH`,
      },
      {
        leftText: 'Number of months',
        rightText: goal.goal.monthCount,
      },
      {
        leftText: 'Start date',
        rightText: this.getDate(goal.goal.dateStart),
      },
      {
        leftText: 'End date',
        rightText: this.getDate(goal.goal.dateEnd),
      },
    ];
  }

  goBackToGoalsPage = () => {
    const { history, location: { search } } = this.props;
    const searchRegex = /\?groupId=(?<groupId>[\w-]+)/;

    if (searchRegex.test(search)) {
      const { groups: { groupId } } = searchRegex.exec(search);
      history.push(`/manager/goals?groupId=${groupId}`);
      return;
    }

    history.push('/manager/goals');
  }

  render() {
    const goal = this.getGoal();
    const chart = (goal) ? this.generateChart(goal.progress) : null;
    const description = this.generateDescription(goal);

    return (
      <Grid relaxed>
        <Grid.Row columns={1} textAlign="center">
          <Grid.Column>
            <Button floated="left" onClick={this.goBackToGoalsPage}>
              <Icon name="angle left" />
              Back
            </Button>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row columns={1}>
          <Grid.Column textAlign="center">
            <Header as="h2">{(goal) ? goal.goal.name : ''}</Header>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row columns={2}>
          <Grid.Column width={5} stretched>
            {
              description.map((d) => (
                <>
                  <CardRow {...d} />
                  <Divider />
                </>
              ))
            }
          </Grid.Column>
          <Grid.Column width={11} stretched>
            <Line data={chart} options={options} />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}
