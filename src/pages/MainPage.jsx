import React from 'react';
import { Redirect } from 'react-router-dom';
import NavBar from '../components/NavBar';

const MainPage = () => (
  <>
    <NavBar />
    {
      (localStorage.getItem('token'))
        ? <Redirect to="/manager/banks" />
        : <Redirect to="/signin" />
    }
  </>
);

export default MainPage;
