import React from 'react';
import { Step } from 'semantic-ui-react';

const LoginStep = ({ activeStep, savedCard = false }) => (
  <Step.Group ordered fluid size="mini">
    <Step active={activeStep === 1} completed={activeStep > 1}>
      <Step.Content>
        <Step.Title>Sign in</Step.Title>
        <Step.Description>Enter email and password</Step.Description>
      </Step.Content>
    </Step>

    <Step active={activeStep === 2} completed={!!savedCard}>
      <Step.Content>
        <Step.Title>Verification</Step.Title>
        <Step.Description>Scan QR code and enter code</Step.Description>
      </Step.Content>
    </Step>
  </Step.Group>
);

export default LoginStep;
