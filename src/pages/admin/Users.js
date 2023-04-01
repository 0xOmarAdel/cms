import React from 'react'
import Button from '../../UI/Button'
import Input from '../../UI/Input'
import Pagination from '../../UI/Pagination'

const Users = () => {
  const users = [
    {
      id: 1,
      nationalId: '30405030108215',
      name: 'Omar Adel Awad',
      email: 'omaradel@demo.com',
      phone: '01074821730',
      createdAt: 'Jan 3, 2021'
    },
    {
      id: 1,
      nationalId: '30405030108215',
      name: 'Omar Adel Awad',
      email: 'omaradel@demo.com',
      phone: '01074821730',
      createdAt: 'Jan 3, 2021'
    },
    {
      id: 1,
      nationalId: '30405030108215',
      name: 'Omar Adel Awad',
      email: 'omaradel@demo.com',
      phone: '01074821730',
      createdAt: 'Jan 3, 2021'
    },
    {
      id: 1,
      nationalId: '30405030108215',
      name: 'Omar Adel Awad',
      email: 'omaradel@demo.com',
      phone: '01074821730',
      createdAt: 'Jan 3, 2021'
    },
    {
      id: 1,
      nationalId: '30405030108215',
      name: 'Omar Adel Awad',
      email: 'omaradel@demo.com',
      phone: '01074821730',
      createdAt: 'Jan 3, 2021'
    },
    {
      id: 1,
      nationalId: '30405030108215',
      name: 'Omar Adel Awad',
      email: 'omaradel@demo.com',
      phone: '01074821730',
      createdAt: 'Jan 3, 2021'
    },
    {
      id: 1,
      nationalId: '30405030108215',
      name: 'Omar Adel Awad',
      email: 'omaradel@demo.com',
      phone: '01074821730',
      createdAt: 'Jan 3, 2021'
    },
    {
      id: 1,
      nationalId: '30405030108215',
      name: 'Omar Adel Awad',
      email: 'omaradel@demo.com',
      phone: '01074821730',
      createdAt: 'Jan 3, 2021'
    },
    {
      id: 1,
      nationalId: '30405030108215',
      name: 'Omar Adel Awad',
      email: 'omaradel@demo.com',
      phone: '01074821730',
      createdAt: 'Jan 3, 2021'
    },
    {
      id: 1,
      nationalId: '30405030108215',
      name: 'Omar Adel Awad',
      email: 'omaradel@demo.com',
      phone: '01074821730',
      createdAt: 'Jan 3, 2021'
    }
  ]

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
            users.map(user => 
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
                    <p>{user.createdAt}</p>
                  </div>
                </div>
              </div>
            )
          }

        </div>
      </div>
      <div className='row'>
        <div className='col-12'>
          <Pagination />
        </div>
      </div>
    </div>
  )
}

export default Users