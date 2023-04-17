import React, { useCallback, useEffect, useState } from 'react'
import Button from '../../UI/Button'
import Input from '../../UI/Input'
import DateFormatter from '../../UI/DateFormatter';

import dummyData from '../../dummy-data.json'

const Admins = () => {
  const [admins, setAdmins] = useState([]);

  const getAdmins = useCallback(async () => {
    const response = await fetch('http://localhost:80/cms-api/admins.php');

    const data = await response.json();
  
    setAdmins(data);
  }, []);

  useEffect(() => {
    getAdmins();
  }, [getAdmins]);

  return (
    <>
      <div className='row'>
        <div className='col-12'>
          <h1 className='mb-4'>Admins</h1>
          <div className='table-heading row py-3'>
            <div className='col-1'>
              <p>ID</p>
            </div>
            <div className='col-2'>
              <p>Name</p>
            </div>
            <div className='col-3'>
              <p>Email</p>
            </div>
            <div className='col-2'>
              <p>Rank</p>
            </div>
            <div className='col-2'>
              <p>Created</p>
            </div>
            <div className='col-2'>
              <p>Added By</p>
            </div>
          </div>

          {
            dummyData.admins.map((admin) => (
              <div className='table-row py-3' key={admin.id}>
                <div className='row'>
                  <div className='col-1'>
                    <p>{admin.id}</p>
                  </div>
                  <div className='col-2'>
                    <p>{admin.name}</p>
                  </div>
                  <div className='col-3'>
                    <p>{admin.email}</p>
                  </div>
                  <div className='col-2'>
                    <p>{admin.rank}</p>
                  </div>
                  <div className='col-2'>
                    <p>
                      <DateFormatter date={admin.createdAt} />
                    </p>
                  </div>
                  <div className='col-2'>
                    <p>{admin.addedBy}</p>
                  </div>
                </div>
              </div>
            ))
          }

        </div>
      </div>
      <div className='row mt-5'>
        <div className='col-12'>
          <h2 className='mb-4'>Add Moderator</h2>
          <form>
            <div className='row'>
              <div className='col-4'>
                <Input type='text' id='name' placeholder='Name' className='mb-3' />
                <Input type='text' id='email' placeholder='Email' />
              </div>
              <div className='col-4'>
                <Input type='password' id='password1' placeholder='Password' className='mb-3' />
                <Input type='password' id='password2' placeholder='Confirm Password' />
              </div>
              <div className='col-4'>
                <Input type='number' placeholder='ID : 2' disabled />
              </div>
              <div className='col-2'>
                <Button className='full-width mt-4' style={{ padding: '8px' }}>Submit</Button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default Admins