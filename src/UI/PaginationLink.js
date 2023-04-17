import React from 'react'

import { Link } from 'react-router-dom'

const PaginationLink = (props) => {
  return (
    <li>
      <Link 
        className={props.className ? 'pagination-link ' + props.className : 'pagination-link'} 
        to={props.to}
      >
        {props.page}
      </Link>
    </li>
  )
}

export default PaginationLink