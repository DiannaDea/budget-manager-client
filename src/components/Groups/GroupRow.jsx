/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import {
  Grid, Icon, Image, Segment, Card,
} from 'semantic-ui-react';
import { withTranslation } from 'react-i18next';
import GroupModal from './GroupModal';

const Row = ({ leftText, rightText }) => (
  <Card.Description>
    <Grid>
      <Grid.Row columns={2}>
        {
          (leftText)
            ? (
              <Grid.Column width={3}>
                <p>{leftText}</p>
              </Grid.Column>
            )
            : null
        }
        <Grid.Column width={8}>
          <p>{rightText}</p>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  </Card.Description>
);

class GroupRow extends React.Component {
  render() {
    const { group, t } = this.props;

    return (
      <Segment>
        <Grid>
          <Grid.Row columns={3} textAlign="center">
            <Grid.Column width={3} stretched>
              {
                (!group.accessLevel)
                  ? (
                    <Image
                      as={Icon}
                      name="lock"
                      floated="left"
                      size="huge"
                      circular
                      color="grey"
                    />
                  )
                  : <div className="group-name">{group.name.slice(0, 2).toUpperCase()}</div>
              }
            </Grid.Column>

            <Grid.Column width={10} textAlign="left" stretched>
              <Row rightText={group.name} />
              {
                  (group.accessLevel)
                    ? <Row rightText={group.users.length} leftText={t('membersText')} />
                    : null
                }
            </Grid.Column>

            <Grid.Column width={3}>
              <GroupModal group={group} />
            </Grid.Column>

          </Grid.Row>
        </Grid>
      </Segment>
    );
  }
}

export default withTranslation()(GroupRow);
