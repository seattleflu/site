import React from 'react'
import PropTypes from 'prop-types'

const options = [
  { value: 'none', label: '' },
  { value: 'yes', label: 'yes' },
  { value: 'no', label: 'no' }
]

const Input = ({ label, text, type, id, value, description, handleChange }) => (
  <div className='form-group'>
    <label htmlFor={label}>{text}</label>
    <p className='inputDescription'>{description}</p>
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

    <button
      type='submit'
      value='yes'
      className={value == 'yes' ? 'switchYes' : 'switch'}
      onClick={handleChange}
    >
      YES
    </button>
    <button
      type='submit'
      value='no'
      className={value == 'no' ? 'switchNo' : 'switch'}
      onClick={handleChange}
    >
      NO
    </button>
  </div>
)
Input.propTypes = {
  label: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired
}
export default Input
