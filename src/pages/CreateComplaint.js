import React, { useCallback, useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Alert from '../UI/Alert'
import Button from '../UI/Button'
import Hero from '../UI/Hero'
import AuthContext from '../store/auth-context'

const CreateComplaint = () => {
  const navigate = useNavigate();

  const [categories, setCategories] = useState([]);

  const getCategories = useCallback(async () => {
    const response = await fetch('http://localhost:80/cms-api/getCategories.php');

    const data = await response.json();
  
    setCategories(data);
  }, []);

  useEffect(() => {
    getCategories();
  }, [getCategories]);

  const [inputs, setInputs] = useState({});

  const changeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    
    setInputs(values => ({ ...values, [name]: value }));
  };

  const submitHandler = async (event) => {
    event.preventDefault();

    const userId = 1;
    const categoryId = inputs.categoryId ? parseInt(inputs.categoryId) : 1;

    const response = await fetch(
      'http://localhost:80/cms-api/submitComplaint.php', 
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({...inputs, categoryId, userId, status: 0}),
      }
    );

    const data = await response.json();

    console.log(data);

  };

  const cancelHandler = () => {
    navigate('/my-complaints');
  };

  return (
    <>
      <Hero title='Create a New Complaint' />
      <section>
        <div className='container'>
          <div className='row'>
            <div className='col-8'>
            <form onSubmit={submitHandler}>
              <div className='row justify-content-center'>
                <div className='col-6 mb-4'>
                  <input className='form-control' name='title' placeholder='Title' onChange={changeHandler} />
                </div>
                <div className='col-6  mb-4'>
                  <select className="form-control" name='categoryId' onChange={changeHandler}>
                    {
                      categories.map((category, index) => <option key={index} value={category.id}>{category.name}</option>)
                    }
                  </select>
                </div>
                <div className='col-12 mb-4'>
                  <textarea className="form-control" placeholder='Message' />
                </div>
                <Button text='Cancel' className='me-4' onClick={cancelHandler} />
                <Button text='Submit' />
              </div>
            </form>
            </div>
            <div className='col-4'>
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