import React from 'react'
import Input from './Input'

const InputWithIcon = (props) => {
  return (
    <div className={props.divClasses ? 'input-group ' + props.divClasses : 'input-group'}>
      <i className={props.iconClasses}></i>
      <Input 
        type={props.type} 
        className={props.inputClasses} 
        id={props.id} name={props.name} 
        placeholder={props.placeholder}
        value={props.value}
        onChange={props.onChange}
        onBlur={props.onBlur}
      />
    </div>
  )
}

export default InputWithIcon