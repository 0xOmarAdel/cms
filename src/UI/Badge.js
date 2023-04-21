import React from 'react'

const Badge = (props) => {
  return (
    <span className={`badge ${props.className}`}>{props.text}</span>
  )
}

export default Badge