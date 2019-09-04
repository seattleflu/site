import React from 'react'
import PropTypes from 'prop-types'
const Select = ({ label, text, type, id, value, options, handleChange }) => (
  <div className='form-group'>
    <label htmlFor={label}>{text}</label>
    <select
      type={type}
      className='form-control'
      id={id}
      value={value}
      onChange={handleChange}
      required
    >
      {options.map(o => (
        <option key={o.value} value={o.value}>
          {o.label}
        </option>
      ))}
    </select>
  </div>
)
Select.propTypes = {
  label: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired
}
export default Select