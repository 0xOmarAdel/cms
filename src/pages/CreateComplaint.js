import React from 'react'
import { useNavigate } from 'react-router-dom'
import Alert from '../UI/Alert'
import Button from '../UI/Button'
import Hero from '../UI/Hero'

const CreateComplaint = () => {
  const navigate = useNavigate();

  const cancelHandler = () => {
    navigate('/my-complaints');
  };

  const selectOptions = [
    'Water',
    'Electricity',
    'Gas',
    'Garbage',
    'Traffic',
    'Roads',
    'Railways',
    'Rain',
    'Telephone',
    'Internet'
  ];

  return (
    <>
      <Hero title='Create a New Complaint' />
      <section>
        <div className='container'>
          <div className='row'>
            <div className='col-8'>
            <form>
              <div className='row justify-content-center'>
                <div className='col-6 mb-4'>
                  <input className='form-control' placeholder='Title' />
                </div>
                <div className='col-6  mb-4'>
                  <select className="form-control">
                    {
                      selectOptions.map(option => <option>{option}</option>)
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