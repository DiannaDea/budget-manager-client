/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { I18nextProvider } from 'react-i18next';
import store from './redux/store';

import App from './pages/App';
import i18n from './i18n';

import './index.css';
import 'react-datepicker/dist/react-datepicker.css';
import 'semantic-ui-css/semantic.min.css';

const AppWithStore = () => (
  <I18nextProvider i18n={i18n}>
    <Provider store={store}>
      <App />
    </Provider>
  </I18nextProvider>
);

ReactDOM.render(<AppWithStore />, document.getElementById('root'));
