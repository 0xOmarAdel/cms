import React from 'react'

const Badge = (props) => {
  return (
    <span className={`badge ${props.className}`} onClick={props.onClick ? props.onClick : () => {}}>{props.text}</span>
  )
}

export default Badge