import React from 'react'
import Button from '../../UI/Button'
import Input from '../../UI/Input'
import Pagination from '../../UI/Pagination'

const Complaints = () => {
  const users = [
    {
      id: 1,
      nationalId: 'Lorem ipsum dolor sit amet',
      name: 'Electricity',
      email: 'Marwan Yasser',
      phone: 'Jan 3, 2021',
      createdAt: 'Jan 3, 2021'
    },
    {
      id: 1,
      nationalId: 'Lorem ipsum dolor sit amet',
      name: 'Electricity',
      email: 'Marwan Yasser',
      phone: 'Jan 3, 2021',
      createdAt: 'Jan 3, 2021'
    },
    {
      id: 1,
      nationalId: 'Lorem ipsum dolor sit amet',
      name: 'Electricity',
      email: 'Marwan Yasser',
      phone: 'Jan 3, 2021',
      createdAt: 'Jan 3, 2021'
    },
    {
      id: 1,
      nationalId: 'Lorem ipsum dolor sit amet',
      name: 'Electricity',
      email: 'Marwan Yasser',
      phone: 'Jan 3, 2021',
      createdAt: 'Jan 3, 2021'
    },
    {
      id: 1,
      nationalId: 'Lorem ipsum dolor sit amet',
      name: 'Electricity',
      email: 'Marwan Yasser',
      phone: 'Jan 3, 2021',
      createdAt: 'Jan 3, 2021'
    },
    {
      id: 1,
      nationalId: 'Lorem ipsum dolor sit amet',
      name: 'Electricity',
      email: 'Marwan Yasser',
      phone: 'Jan 3, 2021',
      createdAt: 'Jan 3, 2021'
    },
    {
      id: 1,
      nationalId: 'Lorem ipsum dolor sit amet',
      name: 'Electricity',
      email: 'Marwan Yasser',
      phone: 'Jan 3, 2021',
      createdAt: 'Jan 3, 2021'
    },
    {
      id: 1,
      nationalId: 'Lorem ipsum dolor sit amet',
      name: 'Electricity',
      email: 'Marwan Yasser',
      phone: 'Jan 3, 2021',
      createdAt: 'Jan 3, 2021'
    },
    {
      id: 1,
      nationalId: 'Lorem ipsum dolor sit amet',
      name: 'Electricity',
      email: 'Marwan Yasser',
      phone: 'Jan 3, 2021',
      createdAt: 'Jan 3, 2021'
    },
    {
      id: 1,
      nationalId: 'Lorem ipsum dolor sit amet',
      name: 'Electricity',
      email: 'Marwan Yasser',
      phone: 'Jan 3, 2021',
      createdAt: 'Jan 3, 2021'
    }
  ]

  return (
    <div className='admins'>
      <div className='row'>
        <div className='col-12'>
          <h1 className='mb-4'>Complaints</h1>
          <div className='table-heading row py-3'>
            <div className='col-1'>
              <p>ID</p>
            </div>
            <div className='col-3'>
              <p>Title</p>
            </div>
            <div className='col-2'>
              <p>Category</p>
            </div>
            <div className='col-2'>
              <p>User</p>
            </div>
            <div className='col-2'>
              <p>Created At</p>
            </div>
            <div className='col-2'>
              <p>Last Modified</p>
            </div>
          </div>

          {
            users.map(user => 
              <div key={user.id} className='admin py-3'>
                <div className='row'>
                  <div className='col-1'>
                    <p>{user.id}</p>
                  </div>
                  <div className='col-3'>
                    <p>{user.nationalId}</p>
                  </div>
                  <div className='col-2'>
                    <p>{user.name}</p>
                  </div>
                  <div className='col-2'>
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

export default Complaints