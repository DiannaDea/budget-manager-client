/* eslint-disable no-param-reassign */
/* eslint-disable no-return-assign */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable no-underscore-dangle */
/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import { DateTime } from 'luxon';
import {
  Grid, Header, Divider, Button, Icon, Statistic,
} from 'semantic-ui-react';
import { withTranslation } from 'react-i18next';
import { Line } from 'react-chartjs-2';
import CardRow from '../../components/CardRow';

const months = [
  'January', 'February', 'March', 'April', 'May',
  'June', 'July', 'August', 'September', 'October', 'November', 'December',
];

const monthsUA = [
  'Січень', 'Лютий', 'Березень', 'Квітень', 'Травень',
  'Червень', 'Липень', 'Серпень', 'Вересень', 'Жовтень', 'Листопад', 'Грудень',
];

const chartColors = {
  red: '#db2828',
  orange: 'rgb(255, 159, 64)',
  yellow: 'rgb(255, 205, 86)',
  green: '#21ba45',
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

export default withTranslation()(class GoalProgress extends React.Component {
  getMonthLabels = (progress) => {
    const m = localStorage.getItem('lang') === 'ua' ? monthsUA : months;
    return progress.map(({ month, year }) => `${m[month - 1]}, ${year}`);
  }

  getDate = (date) => DateTime
    .fromISO(date)
    .toFormat('dd.MM.yyyy')

  getGoal = () => {
    const { goals, match: { params: { id: goalId } } } = this.props;
    return goals.find(({ goal }) => goal._id === goalId);
  }

  generateRealProgress = (progress, t) => ({
    label: t('goalChartWorstProgress'),
    data: progress.map((p) => p.amountToSave),
    ...commonSettings,
    backgroundColor: chartColors.red,
    borderColor: chartColors.red,
  })

  generateIdealProgress = (progress, t) => ({
    label: t('goalChartBestProgress'),
    data: progress.map((p) => Math.round(p.idealAmountToSave)).filter(Boolean),
    ...commonSettings,
    backgroundColor: chartColors.green,
    borderColor: chartColors.green,
  })

  generareLiveProgress = (progress, t) => ({
    label: t('goalChartLiveProgress'),
    data: progress.map((p) => p.amountSaved),
    ...commonSettings,
    backgroundColor: chartColors.yellow,
    borderColor: chartColors.yellow,
  })

  generateChart = (progress, t) => ({
    labels: this.getMonthLabels(progress),
    datasets: [
      this.generateIdealProgress(progress, t),
      this.generareLiveProgress(progress, t),
      this.generateRealProgress(progress, t),
    ],
  })

  getAlreadySaved = (goal) => {
    if (!goal) {
      return '';
    }

    return goal.progress.reduce((res, p) => res += p.amountSaved, 0);
  }

  getSaveMore = (goal) => {
    if (!goal) {
      return '';
    }

    const alreadySaved = goal.progress.reduce((res, p) => res += p.amountSaved, 0);
    return goal.goal.amount - alreadySaved;
  }

  generateDescription = (goal, t) => {
    if (!goal) {
      return [];
    }

    return [
      {
        leftText: t('goalDescriprion'),
        rightText: goal.goal.description,
      },
      {
        leftText: t('goalBestSavePerMonth'),
        rightText: `${Math.round(goal.progress[0].idealAmountToSave, 2)} UAH`,
        id: 'best-save',
      },
      {
        leftText: t('goalWorstSavePerMonth'),
        rightText: `${goal.goal.savePerMonth} UAH`,
        id: 'worst-save',
      },
      {
        leftText: t('goalNumberOfMonths'),
        rightText: Math.ceil(goal.goal.monthCount),
      },
      {
        leftText: t('goalStartDate'),
        rightText: this.getDate(goal.goal.dateStart),
      },
      {
        leftText: t('goalEndDate'),
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
    const { t } = this.props;

    const goal = this.getGoal();
    const chart = (goal) ? this.generateChart(goal.progress, t) : null;
    const description = this.generateDescription(goal, t);

    return (
      <Grid relaxed>
        <Grid.Row columns={1} textAlign="center">
          <Grid.Column>
            <Button floated="left" onClick={this.goBackToGoalsPage}>
              <Icon name="angle left" />
              {t('btnBack')}
            </Button>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row columns={1}>
          <Grid.Column textAlign="center">
            <Header as="h2">{(goal) ? `${t('goalTitle')}: ${goal.goal.name}` : ''}</Header>
          </Grid.Column>
        </Grid.Row>

        <Divider />

        <Grid.Row columns={3}>

          <Grid.Column textAlign="center">
            <Statistic color="green">
              <Statistic.Value>{ goal ? goal.goal.amount : '' }</Statistic.Value>
              <Statistic.Label>{t('goalAmount')}</Statistic.Label>
            </Statistic>
          </Grid.Column>

          <Grid.Column textAlign="center">
            <Statistic color="yellow">
              <Statistic.Value>{ this.getAlreadySaved(goal) }</Statistic.Value>
              <Statistic.Label>{t('goalAlreadySaved')}</Statistic.Label>
            </Statistic>
          </Grid.Column>

          <Grid.Column textAlign="center">
            <Statistic color="red">
              <Statistic.Value>{ this.getSaveMore(goal) }</Statistic.Value>
              <Statistic.Label>{t('goalToSave')}</Statistic.Label>
            </Statistic>
          </Grid.Column>

        </Grid.Row>

        <Divider />

        <Grid.Row columns={2}>
          <Grid.Column width={5} stretched>
            {
              description.map((d) => (
                <>
                  <CardRow {...d} />
                </>
              ))
            }
          </Grid.Column>
          <Grid.Column width={11} stretched>
            <Line data={chart} options={options} />
          </Grid.Column>
        </Grid.Row>

        <Divider />
      </Grid>
    );
  }
});
