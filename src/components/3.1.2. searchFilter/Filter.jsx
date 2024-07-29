import React from 'react'
import './filter.css'

const Filter = (props) => {
  return (
  <>
  <div className='selectors'>
    <label>{props.label}</label>
    <select className='list'>
      <option value="">Default</option>
      <option value="no.1">{props.op1}</option>
      <option value="no.2">{props.op2}</option>
    </select>
  </div>
  </>
  )
}

export default Filter