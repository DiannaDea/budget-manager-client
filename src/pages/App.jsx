import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { router, appRoutes } from '../router';

const App = () => (
  <>
    <Router>
      {router(appRoutes)}
    </Router>
  </>
);

export default App;
