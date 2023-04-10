import React, { useCallback, useEffect, useState } from 'react'
import Pagination from '../../UI/Pagination'
import { useParams } from 'react-router-dom'

const Users = () => {
  const [users, setUsers] = useState([]);

  const getUsers = useCallback(async () => {
    const response = await fetch('http://localhost:80/cms-api/users.php');

    const data = await response.json();
  
    setUsers(data);
  }, []);

  useEffect(() => {
    getUsers();
  }, [getUsers]);

  const DUMMY_USERS = [
    {
      id: 1,
      nationalId: '30203040109381',
      name: 'Omar Adel',
      email: 'omaradel@demo.com',
      phone: '01048463495',
      created_at: '2023-04-02 05:39:52'
    },
    {
      id: 1,
      nationalId: '30203040109381',
      name: 'Omar Adel',
      email: 'omaradel@demo.com',
      phone: '01048463495',
      created_at: '2023-04-02 05:39:52'
    },
    {
      id: 1,
      nationalId: '30203040109381',
      name: 'Omar Adel',
      email: 'omaradel@demo.com',
      phone: '01048463495',
      created_at: '2023-04-02 05:39:52'
    },
    {
      id: 1,
      nationalId: '30203040109381',
      name: 'Omar Adel',
      email: 'omaradel@demo.com',
      phone: '01048463495',
      created_at: '2023-04-02 05:39:52'
    },
    {
      id: 1,
      nationalId: '30203040109381',
      name: 'Omar Adel',
      email: 'omaradel@demo.com',
      phone: '01048463495',
      created_at: '2023-04-02 05:39:52'
    },
    {
      id: 1,
      nationalId: '30203040109381',
      name: 'Omar Adel',
      email: 'omaradel@demo.com',
      phone: '01048463495',
      created_at: '2023-04-02 05:39:52'
    },
    {
      id: 1,
      nationalId: '30203040109381',
      name: 'Omar Adel',
      email: 'omaradel@demo.com',
      phone: '01048463495',
      created_at: '2023-04-02 05:39:52'
    },
    {
      id: 1,
      nationalId: '30203040109381',
      name: 'Omar Adel',
      email: 'omaradel@demo.com',
      phone: '01048463495',
      created_at: '2023-04-02 05:39:52'
    },
    {
      id: 1,
      nationalId: '30203040109381',
      name: 'Omar Adel',
      email: 'omaradel@demo.com',
      phone: '01048463495',
      created_at: '2023-04-02 05:39:52'
    },
    {
      id: 1,
      nationalId: '30203040109381',
      name: 'Omar Adel',
      email: 'omaradel@demo.com',
      phone: '01048463495',
      created_at: '2023-04-02 05:39:52'
    },
    {
      id: 1,
      nationalId: '30203040109381',
      name: 'Omar Adel',
      email: 'omaradel@demo.com',
      phone: '01048463495',
      created_at: '2023-04-02 05:39:52'
    },
    {
      id: 1,
      nationalId: '30203040109381',
      name: 'Omar Adel',
      email: 'omaradel@demo.com',
      phone: '01048463495',
      created_at: '2023-04-02 05:39:52'
    }
  ]

  let { page: currentPage } = useParams();

  const elementsPerPage = 10;
  const pagesNumber = Math.ceil(DUMMY_USERS.length / elementsPerPage) === 0 ? 1 : Math.ceil(DUMMY_USERS.length / elementsPerPage);

  const start = (currentPage - 1) * elementsPerPage;
  const end = start + elementsPerPage;

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
            DUMMY_USERS.slice(start, end).map(user => 
              <div key={user.id} className='table-row py-3'>
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