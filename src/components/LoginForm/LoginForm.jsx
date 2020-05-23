/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import * as Yup from 'yup';
import { Form, Segment, Header } from 'semantic-ui-react';
import LoginStep from './LoginStep';
import VerifyCodeForm from './VerifyCode';
import AuthForm from './AuthForm';

const signInValidation = Yup.object().shape({
  password: Yup.string()
    .required('Password is required'),
  email: Yup.string()
    .required('Email is required'),
});

const verificationValidation = Yup.object().shape({
  token: Yup.string()
    .required('Verification code is required'),
});

const modalContent = {
  1: (props) => (<AuthForm {...props} />),
  2: (props) => (<VerifyCodeForm {...props} />),
};

export default class LoginForm extends React.Component {
  state = {
    activeStep: 1,
    email: '',
    password: '',
    verificationCode: '',
    errorField: null,
    errorMessage: null,
  }

  handleInputChange = (type, value) => {
    this.setState({
      [type]: value,
    });
  }

  handleSignIn = () => {
    const { activeStep, email, password } = this.state;
    const { signIn } = this.props;

    signInValidation.validate({ email, password })
      .then(() => {
        signIn({ email, password });

        this.setState({
          activeStep: activeStep + 1,
          errorField: null,
          errorMessage: null,
        });
      })
      .catch((err) => {
        this.setState({
          errorField: err.path,
          errorMessage: err.message,
        });
      });
  }

  handleVerification = () => {
    const { email, verificationCode } = this.state;
    const { verifyCode } = this.props;

    const payload = { email, token: verificationCode };

    verificationValidation.validate(payload)
      .then(() => {
        verifyCode(payload);
        this.setState({
          errorField: null,
          errorMessage: null,
        });
      })
      .catch((err) => {
        this.setState({
          errorField: err.path,
          errorMessage: err.message,
        });
      });
  }

  render() {
    const { activeStep } = this.state;

    return (
      <Segment>
        <Form success>
          <Header as="h2">Sign in</Header>
          <LoginStep activeStep={activeStep} />
          {
            modalContent[activeStep]({
              ...this.props,
              ...this.state,
              handleSignIn: this.handleSignIn,
              handleInputChange: this.handleInputChange,
              handleVerification: this.handleVerification,
            })
          }
        </Form>
      </Segment>
    );
  }
}
