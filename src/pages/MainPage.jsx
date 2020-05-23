import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import NavBar from '../components/NavBar';

const MainPage = ({ tokens }) => (
  <>
    <NavBar />
    {
      (tokens.accessToken && tokens.refreshToken)
        ? <Redirect to="/manager/banks" />
        : <Redirect to="/signin" />
    }
  </>
);

const mapStateToProps = (state) => {
  const {
    user: {
      tokens,
    },
  } = state;

  return {
    tokens,
  };
};

const mapDispatchToProps = () => ({});

export default connect(mapStateToProps, mapDispatchToProps)(MainPage);
