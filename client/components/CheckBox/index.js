import React from 'react';
import PropTypes from 'prop-types';

const Checkbox = ({ checked, label, name, handleChange }) => (
  <div className="checkbox">
    <label htmlFor={name}>
      <input
        type="checkbox"
        id={name}
        name={name}
        onChange={handleChange}
        checked={checked}/>
      {label}
    </label>
  </div>
);

Checkbox.propTypes = {
  checked: PropTypes.bool,
  label: PropTypes.string,
  handleChange: PropTypes.func,
  name: PropTypes.string,
};


export default Checkbox;
