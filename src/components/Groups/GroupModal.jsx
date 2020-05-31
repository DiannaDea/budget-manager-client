import React, { Component } from 'react';
import {
  Button, Icon, Modal, Segment, Grid, Header, List, Image,
} from 'semantic-ui-react';
import { withTranslation } from 'react-i18next';

export default withTranslation()(class GroupModal extends Component {
  state = { modalOpen: false }

  handleOpen = () => this.setState({ modalOpen: true })

  handleClose = () => this.setState({ modalOpen: false })

  render() {
    const { modalOpen } = this.state;
    const { group, t } = this.props;

    return (
      <Modal
        trigger={(
          <Button color="blue" icon onClick={this.handleOpen}>
            {t('moreBtn')}
            <Icon name="angle right" />
          </Button>
)}
        open={modalOpen}
        onClose={this.handleClose}
        size="tiny"
      >
        <Modal.Header>{group.name}</Modal.Header>
        <Modal.Content>
          <Segment>
            <Grid>

              <Grid.Row columns={1} textAlign="center" stretched>
                <Grid.Column>
                  <p>{t('shareCodeMessage')}</p>
                </Grid.Column>
              </Grid.Row>

              <Grid.Row columns={1} textAlign="center" stretched>
                <Grid.Column>
                  <Header as="h2">{group.inviteCode}</Header>
                </Grid.Column>
              </Grid.Row>

            </Grid>
          </Segment>

          <Segment>
            <Grid padded>

              <Grid.Row columns={1} textAlign="center" stretched>
                <Grid.Column textAlign="center">
                  <p>{t('groupMembers')}</p>
                </Grid.Column>
              </Grid.Row>

              <List divided ordered horizontal>

                {
                    group.users.map((user) => (
                      <List.Item key={user.id}>
                        <Image avatar src="https://react.semantic-ui.com/images/avatar/small/rachel.png" />
                        <List.Content>
                          <List.Header>{`${user.firstName} ${user.lastName}`}</List.Header>
                          {user.email}
                        </List.Content>
                      </List.Item>
                    ))
                  }

              </List>
            </Grid>
          </Segment>

          <Segment>

            <Grid>

              <Grid.Row columns={1} textAlign="center" stretched>
                <Grid.Column textAlign="center">
                  <p>{t('manageGroup')}</p>
                </Grid.Column>
              </Grid.Row>

              <Grid.Row columns={2}>
                <Grid.Column>
                  <Button fluid color="green">{t('changeNameBtn')}</Button>
                </Grid.Column>
                <Grid.Column>
                  <Button fluid color="red">{t('leaveGroupBtn')}</Button>
                </Grid.Column>
              </Grid.Row>
            </Grid>

          </Segment>

        </Modal.Content>
        <Modal.Actions>
          <Button onClick={this.handleClose} color="grey">
            <Icon name="close" />
            {' '}
            {t('closeBtn')}
          </Button>
        </Modal.Actions>
      </Modal>
    );
  }
});
