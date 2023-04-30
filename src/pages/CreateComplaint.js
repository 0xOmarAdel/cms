import React, { useCallback, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Alert from '../UI/Alert'
import Button from '../UI/Button'
import Hero from '../UI/Hero'
import useHTTP from '../hooks/useHttp'
import useInput from '../hooks/useInput'

const CreateComplaint = () => {
  const navigate = useNavigate();

  const [categories, setCategories] = useState([]);

  const { isLoading, error, sendRequest: getCategories } = useHTTP();
  const { isLoading: submitComplaintIsLoading, error: submitComplaintHasError, sendRequest: submitComplaint } = useHTTP();

  const {
    value: enteredTitle,
    valueIsValid: enteredTitleIsValid,
    hasError: titleInputHasError,
    valueChangeHandler: titleInputChangeHandler,
    inputBlurHandler: titleInputBlurHandler,
    reset: resetTitleInput
  } = useInput(value => value.trim() !== '');

  const {
    value: enteredCategory,
    valueIsValid: enteredCategoryIsValid,
    hasError: categoryInputHasError,
    valueChangeHandler: categoryInputChangeHandler,
    inputBlurHandler: categoryInputBlurHandler,
    reset: resetCategoryInput
  } = useInput(value => value.trim() !== '');

  const {
    value: enteredMessage,
    valueIsValid: enteredMessageIsValid,
    hasError: messageInputHasError,
    valueChangeHandler: messageInputChangeHandler,
    inputBlurHandler: messageInputBlurHandler,
    reset: resetMessageInput
  } = useInput(value => value.trim() !== '');

  const formIsValid = enteredMessageIsValid && enteredTitleIsValid;

  const titleInputClasses = titleInputHasError ? 'form-control invalid' : 'form-control';
  const messageInputClasses = messageInputHasError ? 'form-control invalid' : 'form-control';

  const dataHandler = useCallback(
    (data) => {
      setCategories(data);
    },
    []
  );

  useEffect(() => {
    getCategories(
      { url: "http://localhost:80/cms-api/getCategories.php" },
      dataHandler
    );
  }, [getCategories, dataHandler]);

  const submitHandler = async (event) => {
    event.preventDefault();

    if(!formIsValid){ return; }

    const userId = localStorage.getItem('id');
    const categoryId = enteredCategory ? parseInt(enteredCategory) : 1;

    console.log({title: enteredTitle, message: enteredMessage, categoryId, userId, status: 1})

    submitComplaint(
      {
        url: 'http://localhost:80/cms-api/submitComplaint.php',
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: {title: enteredTitle, message: enteredMessage, categoryId, userId, status: 1}
      },
      () => {navigate('/my-complaints');}
    )
  };

  return (
    <>
      <Hero title='Create a New Complaint' />
      <section>
        <div className='container'>
          <div className='row px-3 px-md-0'>
            <div className='col-12 col-md-8 p-0 pe-md-5'>
              <form onSubmit={submitHandler}>
                <div className='row justify-content-center'>
                  {submitComplaintHasError && <p className='error-text text-center mb-3'>An error occurred. Couldn't submit your complaint.<br />You will probably need to complain about that as well lmao.</p>}
                  <div className='col-6 mb-4'>
                    <input 
                      className={titleInputClasses}
                      name='title'
                      placeholder='Title'
                      onChange={titleInputChangeHandler}
                      onBlur={titleInputBlurHandler} 
                      value={enteredTitle}
                    />
                    {titleInputHasError && ( <p className='error-text mt-2'>Title must not be empty.</p> )}
                  </div>
                  <div className='col-6  mb-4'>
                    <select
                      className="form-control"
                      name='categoryId'
                      onChange={categoryInputChangeHandler}
                      onBlur={categoryInputBlurHandler} 
                      value={enteredCategory}
                    >
                      {
                        categories.map((category, index) => <option key={index} value={category.id}>{category.name}</option>)
                      }
                    </select>
                  </div>
                  <div className='col-12 mb-4'>
                    <textarea 
                      className={messageInputClasses}
                      placeholder='Message'
                      onChange={messageInputChangeHandler}
                      onBlur={messageInputBlurHandler} 
                      value={enteredMessage}
                    />
                    {messageInputHasError && ( <p className='error-text mt-2'>Message must not be empty.</p> )}
                  </div>
                  <Button text='Cancel' className='me-4' onClick={() => { navigate('/my-complaints'); }} />
                  <Button text='Submit' disabled={submitComplaintIsLoading} />
                </div>
              </form>
            </div>
            <div className='col-4 d-none d-md-block'>
              <Alert path='/FAQ' icon>Take a look at our FAQ page to quickly find your answers.</Alert>
              <Alert path='/my-complaints' icon>View your previously created complaints from here.</Alert>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default CreateComplaint