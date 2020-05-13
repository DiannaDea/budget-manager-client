/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import { Segment } from 'semantic-ui-react';
import BankCard from '../../components/BankCard';

export default class BanksView extends Component {
  render() {
    const { banks } = this.props;

    return (
      <Segment>
        {
          banks.map((bank) => <BankCard bank={bank} />)
        }
      </Segment>
    );
  }
}
