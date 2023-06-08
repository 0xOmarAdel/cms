import React from 'react'

const StatusFormatter = ({status}) => {
  let st;

  if (status === '0') {
    st = 'Pending'
  } else if (status === '1') {
    st = 'Closed'
  }

  return st;

}

export default StatusFormatter;