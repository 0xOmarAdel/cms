import React from 'react'

const StatusFormatter = ({status}) => {
  let st;

  if (status === '0') {
    st = 'Pending'
  } else if (status === '1') {
    st = 'Closed'
  }
  console.log(status);
  console.log(st);

  return st;

}

export default StatusFormatter;