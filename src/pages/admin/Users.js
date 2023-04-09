import React, { useCallback, useEffect, useState } from 'react'
import Pagination from '../../UI/Pagination'
import { useParams } from 'react-router-dom'

const Users = () => {
  const [users, setUsers] = useState([]);

  let { page: currentPage } = useParams();

  const elementsPerPage = 10;
  const pagesNumber = Math.ceil(users.length / elementsPerPage);

  const start = (currentPage - 1) * elementsPerPage
  const end = start + 10;

  return (
    <div className='admins'>
      <div className='row'>
        <div className='col-12'>
          <h1 className='mb-4'>Users</h1>
          <div className='table-heading row py-3'>
            <div className='col-1'>
              <p>ID</p>
            </div>
            <div className='col-2'>
              <p>National ID</p>
            </div>
            <div className='col-2'>
              <p>Name</p>
            </div>
            <div className='col-3'>
              <p>Email</p>
            </div>
            <div className='col-2'>
              <p>Phone</p>
            </div>
            <div className='col-2'>
              <p>Created At</p>
            </div>
          </div>

          {
            users.slice(start, end).map(user => 
              <div key={user.id} className='admin py-3'>
                <div className='row'>
                  <div className='col-1'>
                    <p>{user.id}</p>
                  </div>
                  <div className='col-2'>
                    <p>{user.nationalId}</p>
                  </div>
                  <div className='col-2'>
                    <p>{user.name}</p>
                  </div>
                  <div className='col-3'>
                    <p>{user.email}</p>
                  </div>
                  <div className='col-2'>
                    <p>{user.phone}</p>
                  </div>
                  <div className='col-2'>
                    <p>{user.created_at}</p>
                  </div>
                </div>
              </div>
            )
          }

        </div>
      </div>
      <div className='row'>
        <div className='col-12'>
          <Pagination pagesNumber={pagesNumber} currentPage={currentPage} />
        </div>
      </div>
    </div>
  )
}

export default Users