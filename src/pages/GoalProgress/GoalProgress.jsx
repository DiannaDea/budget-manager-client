/* eslint-disable no-underscore-dangle */
/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import { Line } from 'react-chartjs-2';

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

  render() {
    const goal = this.getGoal();
    const chart = this.generateChart(goal.progress);

    return (
      <Line data={chart} options={options} />
    );
  }
}
