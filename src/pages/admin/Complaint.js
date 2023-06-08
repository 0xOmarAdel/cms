import React, { useCallback, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ScrollableDiv from '../../UI/ScrollableDiv';

import classes from '../Complaint.module.css'
import DateFormatter from '../../UI/DateFormatter';
import StatusFormatter from '../../UI/StatusFormatter';
import useInput from '../../hooks/useInput';
import useHTTP from '../../hooks/useHttp';

const Complaint = () => {
  const { id } = useParams();

  const [complaint, setComplaint] = useState([]);
  const [messages, setMessages] = useState([]);

  const { isLoading, error, sendRequest: getComplaint } = useHTTP();
  const { isLoading: messagesIsLoading, error: messagesHasError, sendRequest: getMessages } = useHTTP();
  const { isLoading: sendingMessagesIsLoading, error: sendingMessagesHasError, sendRequest: sendMessage } = useHTTP();
  const { isLoading: closeComplaintIsLoading, error: closeComplaintHasError, sendRequest: closeComplaint } = useHTTP();

  const {
    value: enteredMessage,
    valueIsValid: enteredMessageIsValid,
    hasError: messageInputHasError,
    valueChangeHandler: messageInputChangeHandler,
    inputBlurHandler: messageInputBlurHandler,
    reset: resetMessageInput
  } = useInput(value => value.trim().length >= 10);

  const formIsValid = enteredMessageIsValid;

  const messageInputClasses = messageInputHasError ? 'form-control invalid' : 'form-control';

  const getComplaintHandler = useCallback(() => {
    getComplaint(
      { 
        url: "http://localhost:80/cms-api/getComplaintAndUserDeatils.php",
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: {complaintId: id}
      },
      (data) => {setComplaint(data);}
    );
  }, [getComplaint, id]);

  useEffect(() => {
    getComplaintHandler()
  }, [getComplaintHandler]);

  const getMessagesHandler = useCallback(() => {
    getMessages(
      { 
        url: "http://localhost:80/cms-api/getComplaintMessages.php",
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: id
      },
      (data) => {
        setMessages(data);
      }
    );
  }, [getMessages, id]);

  useEffect(() => {
    getMessagesHandler()
  }, [getMessagesHandler]);
  
  const sendMessageHandler = async (e) => {
    e.preventDefault();

    if(!formIsValid){ return; }

    sendMessage(
      {
        url: 'http://localhost:80/cms-api/submitMessage.php', 
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: {message: enteredMessage, complaintId: parseInt(id), from: 1},
      },
      (data) => {
        if(data.status === 1){
          getMessagesHandler();
        }
      }
    )

    resetMessageInput();
  }

  const closeComplaintHandler = useCallback(async () => {
    closeComplaint(
      {
        url: 'http://localhost:80/cms-api/closeComplaint.php', 
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: id
      },
      (data) => {
        if (data.status === 1) {
          getComplaintHandler();
        };
      }
    )
  }, [closeComplaint, getComplaintHandler, id]);

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
              <textarea 
                className={messageInputClasses} 
                placeholder='Message' 
                style={{ height: '20px !important' }} 
                onChange={messageInputChangeHandler} 
                onBlur={messageInputBlurHandler} 
                value={enteredMessage} 
              />
              {messageInputHasError && ( <p className='error-text mt-2'>Message must be at least 10 characters.</p> )}
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
            <p>
              Status: <StatusFormatter status={complaint.status} /> 
              {
                complaint.status === '1' ? 
                  <i className="fa-solid fa-lock ms-2"></i> 
                : 
                  <i className="fa-solid fa-lock-open ms-2" onClick={closeComplaintHandler}></i>
              }
            </p>
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