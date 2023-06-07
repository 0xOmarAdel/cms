import React from 'react'

const StatusFormatter = ({status}) => {
  let st;

  if (status === '0') {
    st = 'Opened'
  } else if (status === '1') {
    st = 'Pending'
  } else {
    st = 'Closed'
  }

  return st;

}

export default StatusFormatter;