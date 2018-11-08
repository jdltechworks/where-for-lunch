import React from 'react';
import PropTypes from 'prop-types';

const Checkbox = ({ categories, display, value, handleChange }) => (
  <div className="checkbox">
    <label htmlFor={value}>
      <input
        type="checkbox"
        id={value}
        name={value}
        onChange={handleChange}
        checked={categories.includes(value)}/>
      {display}
    </label>
  </div>
);

Checkbox.propTypes = {
  categories: PropTypes.array,
  display: PropTypes.string,
  handleChange: PropTypes.func,
  value: PropTypes.string,
};


export default Checkbox;
