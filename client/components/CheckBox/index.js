import React from 'react';
import PropTypes from 'prop-types';

const Checkbox = ({ selected, label, name, handleChange }) => (
  <div className="checkbox">
    <label htmlFor={name}>
      <input
        type="checkbox"
        id={name}
        name={name}
        onChange={handleChange}
        checked={selected.includes(name)}/>
      {label}
    </label>
  </div>
);

Checkbox.propTypes = {
  selected: PropTypes.array,
  label: PropTypes.string,
  handleChange: PropTypes.func,
  name: PropTypes.string,
};


export default Checkbox;
