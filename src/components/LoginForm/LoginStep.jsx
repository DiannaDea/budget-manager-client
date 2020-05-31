import React from 'react';
import { Step } from 'semantic-ui-react';
import { withTranslation } from 'react-i18next';

const LoginStep = ({ activeStep, savedCard = false, t }) => (
  <Step.Group ordered fluid size="mini">
    <Step active={activeStep === 1} completed={activeStep > 1}>
      <Step.Content>
        <Step.Title>{t('signInStep1Text')}</Step.Title>
        <Step.Description>{t('signInStep1Description')}</Step.Description>
      </Step.Content>
    </Step>

    <Step active={activeStep === 2} completed={!!savedCard}>
      <Step.Content>
        <Step.Title>{t('signInStep2Text')}</Step.Title>
        <Step.Description>{t('signInStep2Description')}</Step.Description>
      </Step.Content>
    </Step>
  </Step.Group>
);

export default withTranslation()(LoginStep);
