import React from 'react'
import Input from './Input'

const InputWithIcon = (props) => {
  return (
    <div className="input-group mb-4">
      <i className={props.iconClasses}></i>
      <Input type={props.type} className={props.inputClasses} id={props.id} placeholder={props.placeholder} />
    </div>
  )
}

export default InputWithIcon