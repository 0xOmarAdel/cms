import React from 'react'

const Input = (props) => {
  return (
    <input type={props.type} className={`form-control ${props.className}`} id={props.id} placeholder={props.placeholder} />
  )
}

export default Input