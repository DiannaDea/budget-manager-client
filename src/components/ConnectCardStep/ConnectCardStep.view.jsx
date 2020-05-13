import React from 'react';
import { Step } from 'semantic-ui-react';

const ConnectCardStep = ({ activeStep }) => (
  <Step.Group ordered fluid size="mini">
    <Step active={activeStep === 1} completed={activeStep > 1}>
      <Step.Content>
        <Step.Title>Shipping</Step.Title>
        <Step.Description>Choose your shipping options</Step.Description>
      </Step.Content>
    </Step>

    <Step active={activeStep === 2}>
      <Step.Content>
        <Step.Title>Billing</Step.Title>
        <Step.Description>Enter billing information</Step.Description>
      </Step.Content>
    </Step>
  </Step.Group>
);

export default ConnectCardStep;
