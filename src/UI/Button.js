import React from 'react'

const Button = (props) => {
  return (
    <button 
      className={`btn-primary ${props.className}`} 
      style={props.style}
      type={props.type}
      onClick={() => props.onClick()}
    >
      {props.text}
    </button>
  )
}

export default Button