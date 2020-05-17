/* eslint-disable react/prefer-stateless-function */
/* eslint-disable jsx-a11y/label-has-associated-control */
import { connect } from 'react-redux';
import React from 'react';
import { Dropdown, Form } from 'semantic-ui-react';

class CategoriesSelect extends React.Component {
  transformCategories = () => {
    const { categories } = this.props;
    if (!categories) {
      return [];
    }
    return categories.map((category) => ({
      key: category.id,
      value: category.id,
      text: category.name,
    }));
  }

  render() {
    const { selectedCategory, handleCategorySelect, selectCategoryError } = this.props;
    const categoriesOptions = this.transformCategories();

    const error = selectCategoryError ? {
      content: selectCategoryError,
      pointing: 'above',
    } : null;

    return (
      <Form.Field
        control={Dropdown}
        label="Category"
        onChange={handleCategorySelect}
        options={categoriesOptions}
        placeholder="Choose category"
        selection
        value={selectedCategory}
        error={error}
      />
    );
  }
}

const mapStateToProps = (state) => {
  const {
    categories: {
      data: categories,
    },
  } = state;

  return {
    categories,
  };
};

const mapDispatchToProps = () => ({});

export default connect(mapStateToProps, mapDispatchToProps)(CategoriesSelect);
