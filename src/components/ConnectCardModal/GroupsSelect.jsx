/* eslint-disable react/prefer-stateless-function */
/* eslint-disable jsx-a11y/label-has-associated-control */
import { connect } from 'react-redux';
import React from 'react';
import { Dropdown, Form } from 'semantic-ui-react';
import { withTranslation } from 'react-i18next';

class GroupsSelect extends React.Component {
  transformGroups = () => {
    const { groups } = this.props;
    if (!groups) {
      return [];
    }
    return groups.map((group) => ({
      key: group.id,
      value: group.id,
      text: group.name,
    }));
  }

  render() {
    const {
      selectedGroup, handleGroupSelect, selectGroupError, inline = false, t,
    } = this.props;
    const groupOptions = this.transformGroups();

    const error = selectGroupError ? {
      content: selectGroupError,
      pointing: 'above',
    } : null;

    return (
      <Form.Field
        inline={inline}
        control={Dropdown}
        label={t('cardItemGroup')}
        onChange={handleGroupSelect}
        options={groupOptions}
        placeholder={t('chooseGroupPlaceholder')}
        selection
        value={selectedGroup}
        error={error}
      />
    );
  }
}

const mapStateToProps = (state) => {
  const {
    groups: {
      data: groups,
    },
  } = state;

  return {
    groups,
  };
};

const mapDispatchToProps = () => ({});

export default withTranslation()(connect(mapStateToProps, mapDispatchToProps)(GroupsSelect));
