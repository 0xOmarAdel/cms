import React from 'react'
import { FaChevronDown } from 'react-icons/fa'

const TableHeading = (props) => {
  return (
    <div className="table-heading row d-none d-lg-flex py-3">

      {
        props.table.map((heading, index) => (
          <div className={`col-${heading.colSize}`} key={index}>
            <p onClick={() => props.sortHandler(heading.value)}>
              {heading.label}
              {heading.value === props.sortBy ? <FaChevronDown /> : ''}
            </p>
          </div>
        ))
      }

    </div>
  )
}

export default TableHeading