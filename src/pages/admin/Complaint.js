import React, { useCallback, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Button from '../../UI/Button';
import ScrollableDiv from '../../UI/ScrollableDiv';

import classes from '../Complaint.module.css'
import DateFormatter from '../../UI/DateFormatter';

const Complaint = () => {
  const { id } = useParams();

  const [complaint, setComplaint] = useState([]);

  const getComplaint = useCallback(async () => {
    const response = await fetch(
      'http://localhost:80/cms-api/getComplaintDetails.php', 
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(id),
      }
    );

    const data = await response.json();
  
    setComplaint(data);
  }, []);

  useEffect(() => {
    getComplaint();
  }, [getComplaint]);

  return (
    <div className={`row ${classes.complaint}`}>
      <div className='col-sm-12 col-lg-8 mb-5 mb-lg-0'>
        <div className={`${classes.messages} mb-4`}>
          <ScrollableDiv className='d-flex align-items-end' style={{height: '550px'}}>
            <div className='row' style={{ maxHeight: '100%' }}>
              <div className='col-7 p-0 ms-auto'>
                <p className={`${classes.message} ${classes.sent} mb-1`}>Exercitation est nostrud enim aute irure excepteur eu et ea dolor voluptate qui reprehenderit.</p>
                <p className={`${classes.date} ${classes.sent} mb-3`}>10-12-2022 06:00 AM</p>
              </div>
              <div className='col-7 p-0'>
                <p className={`${classes.message} mb-1`}>Aliquip excepteur ad proident ipsum culpa reprehenderit aute excepteur laboris exercitation.</p>
                <p className={`${classes.date} mb-3`}>10-12-2022 06:00 AM</p>
              </div>
              <div className='col-7 p-0 ms-auto'>
                <p className={`${classes.message} ${classes.sent} mb-1`}>Nisi cillum aute pariatur dolor proident nisi minim fugiat.</p>
                <p className={`${classes.date} ${classes.sent} mb-3`}>10-12-2022 06:00 AM</p>
              </div>
              <div className='col-7 p-0 ms-auto'>
                <p className={`${classes.message} ${classes.sent} mb-1`}>Occaecat eu Lorem voluptate deserunt sint adipisicing Lorem non do qui.</p>
                <p className={`${classes.date} ${classes.sent} mb-3`}>10-12-2022 06:00 AM</p>
              </div>
              <div className={`col-7 p-0 ${classes.focus}`} id='focus' tabIndex="0">
                <p className={`${classes.message} mb-1`}>Aliquip eu Lorem magna velit et laboris excepteur.</p>
                <p className={`${classes.date} mb-3`}>10-12-2022 06:00 AM</p>
              </div>
            </div>
          </ScrollableDiv>
        </div>
        <form>
        <div className='row justify-content-center'>
          <div className='col-12 mb-3 p-0'>
            <textarea className="form-control" placeholder='Message' style={{ height: '20px !important' }} />
          </div>
          <Button text='Send' className='full-width' />
        </div>
      </form>
      </div>
      <div className='col-sm-12 col-lg-4 ps-5'>
        <h2 className='mb-4'>Complaint Details</h2>
        <ul className='mb-5'>
          <li>
            <p>ID: {id}</p>
          </li>
          <li>
            <p>Title: {complaint.title}</p>
          </li>
          <li>
            <p>Category: {complaint.categoryName}</p>
          </li>
          <li>
            <p>Created At: <DateFormatter date={complaint.date_created} /></p>
          </li>
          <li>
            <p>Last Updated: <DateFormatter date={complaint.last_modified} /></p>
          </li>
          <li>
            <p>Status: {complaint.status}</p>
          </li>
        </ul>
        <h2  className='mb-4'>User Details</h2>
        <ul>
          <li>
            <p>ID: {complaint.userId}</p>
          </li>
          <li>
            <p>National ID: {complaint.userNationalId}</p>
          </li>
          <li>
            <p>Name: {complaint.userName}</p>
          </li>
          <li>
            <p>Email: {complaint.userEmail}</p>
          </li>
          <li>
            <p>Phone: {complaint.userPhone}</p>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Complaint