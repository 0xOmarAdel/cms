import React, { useEffect } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'

import classes from './Pagination.module.css'

const Pagination = ({ pagesNumber, currentPage }) => {
  const location = useLocation();

  let path = location.pathname.split('/');
  console.log(location.pathname)
  path.pop();
  path = path.join('/') + '/';  

  const pages = Array.from({length: pagesNumber}, (_, index) => {
    return index + 1
  });

  currentPage = parseInt(currentPage);
  console.log(currentPage)
  pagesNumber = parseInt(pagesNumber);

  const navigate = useNavigate();

  useEffect(() => {
    if (isNaN(currentPage) || currentPage < 1) {
      navigate(path + '1');
    } else if (currentPage > pagesNumber) {
      navigate(path + pagesNumber);
    } else if (!currentPage) {
      if (location.pathname.charAt(location.pathname.length - 1) === '/') {
        navigate(location.pathname + '1')
      } else {
        navigate(location.pathname + '/1');
      }
    }
  }, [pagesNumber, currentPage])

  if ( pagesNumber < 2 ) {
    return;
  }

  return (
    <ul className={'d-flex justify-content-center mt-4'}>
      {
        currentPage != 1 &&
        <li>
          <Link className={`${classes['page-link']}`} to={`${path}${currentPage - 1}`}>«</Link>
        </li>
      }

      {
        pages.map((page, index) => (
          <li key={index}>
            <Link 
              className={currentPage === page ? classes['page-link'] + ' ' + classes.active : classes['page-link']} 
              to={`${path}${page}`}>
                {page}
            </Link>
          </li>
        ))
      }

      {
        currentPage != pagesNumber &&
        <li>
          <Link className={`${classes['page-link']}`} to={`${path}${currentPage + 1}`}>»</Link>
        </li>
      }
  </ul>
  )
}

export default Pagination