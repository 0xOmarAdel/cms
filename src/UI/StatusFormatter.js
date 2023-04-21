import React from 'react'

let st;
let msg;
const StatusValue = ({status}) => {
  if (status === '0') {
    st = 'Opened'
  } else if (status === '1') {
    st = 'Closed'
  } else {
    // 2, 3
    st = 'Pending'
  }

  return st;
}

const StatusMessage = (status) => {
  if (status === '2') {
    msg = 'Waiting for admin response'
  } else if (status === '3') {
    st = 'Waiting for user response'
  } else {
    // 0, 1
    st = ''
  }

  return (
    <div>StatusFormatter</div>
  )
}

export {StatusValue, StatusMessage}