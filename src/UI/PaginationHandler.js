import React, { useEffect } from 'react'
import Pagination from './Pagination'
import { useLocation, useNavigate } from 'react-router-dom';

const PaginationHandler = ({currentPage, dataLength, elementsPerPage}) => {
  const pagesNumber =
    Math.ceil(dataLength / elementsPerPage) === 0
      ? 1
      : Math.ceil(dataLength / elementsPerPage);

  // Note: Index 0 represents the value 1
  const pages = Array.from({length: pagesNumber}, (_, index) => {
    return index + 1
  });

  const location = useLocation();

  let path = location.pathname.split('/');
  path.pop();
  path = path.join('/') + '/'; 

  const navigate = useNavigate();

  useEffect(() => {
    if (currentPage === undefined) {
      if (location.pathname.charAt(location.pathname.length - 1) !== '/') {
        navigate(location.pathname + '/1')
      } else {
        navigate(path + '1');
      }
    } else if (isNaN(currentPage) || !pages.includes(parseInt(currentPage))) {
      navigate(path + '1');
    }
  })

  return (
    <>
      {pagesNumber > 1 ? <Pagination pages={pages} pagesNumber={pagesNumber} currentPage={parseInt(currentPage)} path={path} /> : ''}
    </>
  )
}

export default PaginationHandler