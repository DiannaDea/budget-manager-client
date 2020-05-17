/* eslint-disable react/prefer-stateless-function */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import { Grid } from 'semantic-ui-react';

import appRoutes from '../../router';

import NavBar from '../NavBar';
import SideBar from '../SideBar';

export default class App extends React.Component {
  componentDidMount() {
    const { getGroups, getCategories } = this.props;
    getGroups();
    getCategories();
  }

  render() {
    return (
      <div>
        <Router>
          <NavBar />
          <Grid padded relaxed>
            <Grid.Column width={3} stretched>
              <SideBar />
            </Grid.Column>
            <Grid.Column stretched width={12}>
              {
                appRoutes.map(({
                  component: Component, routes, isProtected, ...routeInfo
                }) => (
                  <Route
                    {...routeInfo}
                    render={(props) => (
                      <Component {...props} routes={routes} />
                    )}
                  />
                ))
              }
            </Grid.Column>
          </Grid>
        </Router>
      </div>
    );
  }
}
