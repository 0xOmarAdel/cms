import React, { useCallback, useEffect, useState } from 'react'
import Button from '../../UI/Button'
import Input from '../../UI/Input'

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
            admins.map((admin, index) => (
              <div className='table-row py-3'>
                <div className='row'>
                  <div className='col-1'>
                    <p>1</p>
                  </div>
                  <div className='col-2'>
                    <p>Omar Adel</p>
                  </div>
                  <div className='col-3'>
                    <p>omaradel@gmail.com</p>
                  </div>
                  <div className='col-2'>
                    <p>Administrator</p>
                  </div>
                  <div className='col-2'>
                    <p>Jan 3, 2021</p>
                  </div>
                  <div className='col-2'>
                    <p>Kerolos Talaat</p>
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
                <Input type='number' placeholder='ID' disabled className='mb-3' />
                <Input type='text' placeholder='Moderator' disabled />
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