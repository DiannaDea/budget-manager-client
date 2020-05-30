/* eslint-disable import/no-cycle */
import React from 'react';
import { Grid } from 'semantic-ui-react';
import { router, managerRoutes } from '../../router';
import SideBar from '../SideBar';

export default class ManagerApp extends React.Component {
  componentDidMount() {
    const userId = localStorage.getItem('userId');

    const { getGroups, getCategories } = this.props;

    getGroups({ userId });
    getCategories();
  }

  render() {
    return (
      <div>
        <Grid padded relaxed>
          <Grid.Column width={3} stretched>
            <SideBar />
          </Grid.Column>
          <Grid.Column stretched width={12}>
            {router(managerRoutes)}
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}
