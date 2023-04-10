import React from 'react'
import { useParams } from 'react-router-dom'

const Complaint = () => {
  const { id } = useParams();

  return (
    <div>{id}</div>
  )
}

export default Complaint