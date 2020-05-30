/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import GroupRow from './GroupRow';

class GroupsList extends React.Component {
  render() {
    const { groups } = this.props;

    return (
      <>
        {
          groups.map((group) => <GroupRow key={group.id} group={group} />)
        }
      </>
    );
  }
}

export default GroupsList;
