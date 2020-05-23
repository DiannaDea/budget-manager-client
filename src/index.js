/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './redux/store';

import App from './pages/App';

import './index.css';
import 'react-datepicker/dist/react-datepicker.css';
import 'semantic-ui-css/semantic.min.css';

const AppWithStore = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

ReactDOM.render(<AppWithStore />, document.getElementById('root'));
