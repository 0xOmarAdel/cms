import React, { useCallback, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Button from '../../UI/Button';
import ScrollableDiv from '../../UI/ScrollableDiv';

import classes from '../Complaint.module.css'
import DateFormatter from '../../UI/DateFormatter';
import {StatusValue} from '../../UI/StatusFormatter';

const Complaint = () => {
  const { id } = useParams();

  const [complaint, setComplaint] = useState([]);
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState('');

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
  }, [id]);

  const getMessages = useCallback(async () => {
    const response = await fetch(
      'http://localhost:80/cms-api/getComplaintMessages.php', 
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(id),
      }
    );

    const data = await response.json();
  
    setMessages(data);
  }, [id]);

  useEffect(() => {
    getComplaint();
  }, [getComplaint]);

  useEffect(() => {
    getMessages();
  }, [getMessages]);

  const changeHandler = (event) => {
    const msg = event.target.value;
    
    setMessage(msg);
  };

  const sendMessageHandler = async (e) => {
    e.preventDefault();

    const response = await fetch(
      'http://localhost:80/cms-api/submitMessage.php', 
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({message, complaintId: parseInt(id), from: 1}),
      }
    );

    const data = await response.json();

    if(data.status === 1){
      getMessages();
    }
  }

  return (
    <div className={`row ${classes.complaint}`}>
      <div className='col-sm-12 col-lg-8 mb-5 mb-lg-0'>
        <div className={`${classes.messages} mb-4`}>
          <ScrollableDiv className='d-flex align-items-end' style={{height: '550px'}}>
            <div className='row full-width' style={{ maxHeight: '100%' }}>

              {
                messages.map((message) => (
                  <div className={message.from === '0'? 'col-7 p-0' : 'col-7 p-0 ms-auto'} key={message.id}>
                    <div className={message.from === '1'? 'd-flex align-items-end' : 'd-flex align-items-start'} style={{flexDirection: 'column'}}>
                      <p className={message.from === '1'? classes.message + ' ' + classes.sent + ' mb-1' : classes.message + ' mb-1'}>{message.text}</p>
                      <p className={message.from === '1'? classes.date + ' ' + classes.sent + ' mb-3' : classes.date + ' mb-3'}>
                        <DateFormatter date={message.date} />  
                      </p>
                    </div>
                  </div>
                ))
              }
              
            </div>
          </ScrollableDiv>
        </div>
        <form>
        <div className='row'>
          <div className='col-11 p-0'>
            <textarea className="form-control" placeholder='Message' style={{ height: '20px !important' }} onChange={changeHandler} />
          </div>
          <div className='col-1 mt-1 pe-0'>
            <i className={`fa-solid fa-location-arrow ${classes.send}`} onClick={sendMessageHandler}></i>
          </div>
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
            <p>Status: <StatusValue status={complaint.status} /> <i className="fa-solid fa-lock"></i></p>
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