import React, { useEffect } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'

import classes from './Pagination.module.css'

const Pagination = ({ pagesNumber, currentPage }) => {
  const location = useLocation();

  let path = location.pathname.split('/');
  path.pop();
  path = path.join('/') + '/';  

  const pages = Array.from({length: pagesNumber}, (_, index) => {
    return index + 1
  });

  const navigate = useNavigate();

  useEffect(() => {
    if (currentPage === undefined) {
      if (location.pathname.charAt(location.pathname.length - 1) !== '/') {
        navigate(location.pathname + '/1')
      } else {
        navigate(path + '1');
      }
    } else if (isNaN(parseInt(currentPage)) || parseInt(currentPage) < 1) {
      navigate(path + '1');
    } else if (parseInt(currentPage) > parseInt(pagesNumber)) {
      navigate(path + parseInt(pagesNumber));
    }
  })

  if ( pagesNumber < 2 ) {
    return;
  }

  return (
    <ul className={'d-flex justify-content-center mt-4'}>
      {
        parseInt(currentPage) !== 1 &&
        <li>
          <Link className={`${classes['page-link']}`} to={`${path}${parseInt(currentPage) - 1}`}>«</Link>
        </li>
      }

      {
        pages.map((page, index) => (
          <li key={index}>
            <Link 
              className={parseInt(currentPage) === page ? classes['page-link'] + ' ' + classes.active : classes['page-link']} 
              to={`${path}${page}`}>
                {page}
            </Link>
          </li>
        ))
      }

      {
        parseInt(currentPage) !== parseInt(pagesNumber) &&
        <li>
          <Link className={`${classes['page-link']}`} to={`${path}${parseInt(currentPage) + 1}`}>»</Link>
        </li>
      }
  </ul>
  )
}

export default Pagination