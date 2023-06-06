import React, { useCallback, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import ScrollableDiv from '../UI/ScrollableDiv'
import classes from './Complaint.module.css'
import DateFormatter from '../UI/DateFormatter'
import StatusFormatter from '../UI/StatusFormatter'
import useInput from '../hooks/useInput'
import useHTTP from '../hooks/useHttp'
import Hero from '../UI/Hero'

const Complaint = () => {
  const { complaintId } = useParams();

  const [complaint, setComplaint] = useState([]);
  const [messages, setMessages] = useState([]);

  const { isLoading: complaintDetailsIsLoading, error: complaintDetailsHasError, sendRequest: getComplaint } = useHTTP();
  const { isLoading: messagesIsLoading, error: messagesHasError, sendRequest: getMessages } = useHTTP();
  const { isLoading: sendingMessagesIsLoading, error: sendingMessagesHasError, sendRequest: sendMessage } = useHTTP();

  const {
    value: enteredMessage,
    valueIsValid: enteredMessageIsValid,
    hasError: messageInputHasError,
    valueChangeHandler: messageInputChangeHandler,
    inputBlurHandler: messageInputBlurHandler,
    reset: resetMessageInput
  } = useInput(value => value.trim() !== '');

  const formIsValid = enteredMessageIsValid;

  const messageInputClasses = messageInputHasError ? 'form-control invalid' : 'form-control';

  const getMessagesHandler = useCallback(() => {
    getMessages(
      { 
        url: "http://localhost:80/cms-api/getComplaintMessages.php",
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: complaintId
      },
      (data) => {
        setMessages(data);
      }
    );
  }, [getMessages, complaintId]);

  const navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem('id')) {
      navigate('/login')
    }
    
    getComplaint(
      { 
        url: "http://localhost:80/cms-api/getComplaintDetails.php",
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: complaintId
      },
      (data) => {
        setComplaint(data);
      }
    );

    getMessagesHandler();
  }, [getComplaint, complaintId, getMessagesHandler]);

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
        body: {message: enteredMessage, complaintId: parseInt(complaintId), from: 0},
      },
      (data) => {
        if(data.status === 1){
          getMessagesHandler();
        }
      }
    )

    resetMessageInput();
  }

  return (
    <>
      <Hero title={complaint.title} />
      <section className={classes.complaint}>
        <div className='container'>
          <div className='row'>
            <div className='col-12 col-lg-4 mb-5 mb-lg-0 ps-lg-5'>
              <h2 className='mb-4'>Complaint Details</h2>
              <ul>
                <li>
                  <p>ID: {complaintId}</p>
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
                  <p>Status: <StatusFormatter status={complaint.status} /></p>
                </li>
                {
                  parseInt(complaint.status) === 2 &&
                  <li>
                    <p>Closed At: <DateFormatter date={complaint.date_closed} /></p>
                  </li>
                }
              </ul>
            </div>
            <div className='col-12 col-lg-8 order-lg-first'>
              <div className={`${classes.messages} mb-4`}>
                <ScrollableDiv className='d-flex align-items-end' style={{height: '550px'}}>
                  <div className='row full-width' style={{ maxHeight: '100%' }}>

                    {
                      messages.map((message) => (
                        <div className={message.from === '1'? 'col-7 p-0' : 'col-7 p-0 ms-auto'} key={message.id}>
                          <div className={message.from === '0'? 'd-flex align-items-end' : 'd-flex align-items-start'} style={{flexDirection: 'column'}}>
                            <p className={message.from === '0'? classes.message + ' ' + classes.sent + ' mb-1' : classes.message + ' mb-1'}>{message.text}</p>
                            <p className={message.from === '0'? classes.date + ' ' + classes.sent + ' mb-3' : classes.date + ' mb-3'}>
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
                      {messageInputHasError && ( <p className='error-text mt-2'>Message must not be empty.</p> )}
                    </div>
                    <div className='col-1 mt-1 pe-0'>
                      <i className={`fa-solid fa-location-arrow ${classes.send}`} onClick={sendMessageHandler}></i>
                    </div>
                  </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Complaint