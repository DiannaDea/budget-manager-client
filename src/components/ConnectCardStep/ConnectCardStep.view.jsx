import React from 'react';
import { Step } from 'semantic-ui-react';
import { withTranslation } from 'react-i18next';

const ConnectCardStep = ({ activeStep, savedCard, t }) => (
  <Step.Group ordered fluid size="mini">
    <Step active={activeStep === 1} completed={activeStep > 1}>
      <Step.Content>
        <Step.Title>{t('connectCardStep1Title')}</Step.Title>
        <Step.Description>{t('connectCardStep1Description')}</Step.Description>
      </Step.Content>
    </Step>

    <Step active={activeStep === 2} completed={!!savedCard}>
      <Step.Content>
        <Step.Title>{t('connectCardStep2Title')}</Step.Title>
        <Step.Description>{t('connectCardStep2Description')}</Step.Description>
      </Step.Content>
    </Step>
  </Step.Group>
);

export default withTranslation()(ConnectCardStep);
