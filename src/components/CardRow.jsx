import React from 'react';
import { Card, Grid } from 'semantic-ui-react';

const CardRow = ({ leftText, rightText, id = null }) => (
  <Card.Description>
    <Grid>
      <Grid.Row columns={2} id={id}>
        <Grid.Column width={6}>
          <p>{leftText}</p>
        </Grid.Column>
        <Grid.Column width={8}>
          <p>{rightText}</p>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  </Card.Description>
);

export default CardRow;
