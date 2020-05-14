import React from 'react';
import { Step } from 'semantic-ui-react';

const ConnectCardStep = ({ activeStep, savedCard }) => (
  <Step.Group ordered fluid size="mini">
    <Step active={activeStep === 1} completed={activeStep > 1}>
      <Step.Content>
        <Step.Title>Validate card</Step.Title>
        <Step.Description>Enter card information</Step.Description>
      </Step.Content>
    </Step>

    <Step active={activeStep === 2} completed={!!savedCard}>
      <Step.Content>
        <Step.Title>Choose group</Step.Title>
        <Step.Description>Enter groups information</Step.Description>
      </Step.Content>
    </Step>
  </Step.Group>
);

export default ConnectCardStep;
