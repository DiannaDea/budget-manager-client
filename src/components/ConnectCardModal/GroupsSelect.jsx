/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { Dropdown, Form } from 'semantic-ui-react';

const bankOptions = [
  { key: 'group1', value: 'group1', text: 'Group 1' },
  { key: 'group2', value: 'group2', text: 'Group 2' },
];

const GroupsSelect = () => (
  <Form.Group inline>
    <label>Select group</label>
    <Form.Field>
      <Dropdown
          // onChange={handleBankChange}
        options={bankOptions}
        placeholder="Choose group"
        selection
        // value="group1"
      />
    </Form.Field>
  </Form.Group>
);

export default GroupsSelect;
