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
          <div className='table-heading row d-none d-lg-flex py-3'>
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
                  <div className='d-none d-lg-block col-1'>
                    <p>{admin.id}</p>
                  </div>
                  <div className='d-none d-lg-block col-2'>
                    <p>{admin.name}</p>
                  </div>
                  <div className='d-none d-lg-block col-3'>
                    <p>{admin.email}</p>
                  </div>
                  <div className='d-none d-lg-block col-2'>
                    <p>{admin.rank}</p>
                  </div>
                  <div className='d-none d-lg-block col-2'>
                    <p>
                      <DateFormatter date={admin.createdAt} />
                    </p>
                  </div>
                  <div className='d-none d-lg-block col-2'>
                    <p>{admin.addedBy}</p>
                  </div>
                  
                  <div className='d-block d-lg-none col-12'>
                    <p>ID: {admin.id}</p>
                  </div>
                  <div className='d-block d-lg-none col-12'>
                    <p>Name: {admin.name}</p>
                  </div>
                  <div className='d-block d-lg-none col-12'>
                    <p>Rank: {admin.rank}</p>
                  </div>
                  <div className='d-block d-lg-none col-12'>
                    <p>Added By: {admin.addedBy}</p>
                  </div>
                  <div className='d-block d-lg-none col-12'>
                    <p>Email: {admin.email}</p>
                  </div>
                  <div className='d-block d-lg-none col-12'>
                    <p>Created At: <DateFormatter date={admin.createdAt} /></p>
                  </div>
                </div>
              </div>
            ))
          }

        </div>
      </div>
    </>
  )
}

export default Admins