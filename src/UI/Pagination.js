import React from 'react'
import { Link } from 'react-router-dom'

import classes from './Pagination.module.css'

const Pagination = () => {
  return (
    <ul className={'d-flex justify-content-center mt-4'}>
      <li>
        <Link className={`${classes['page-link']}`} to="#">«</Link>
      </li>
      <li><Link className={`${classes['page-link']}`} to="1">1</Link></li>
      <li><Link className={`${classes['page-link']} ${classes.active} `} to="2">2</Link></li>
      <li><Link className={`${classes['page-link']}`} to="3">3</Link></li>
      <li>
        <Link className={`${classes['page-link']}`} to="#">»</Link>
      </li>
  </ul>
  )
}

export default Pagination