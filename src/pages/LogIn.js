import React, { useContext, useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Intro from '../components/Intro'
import Button from '../UI/Button'
import InputWithIcon from '../UI/InputWithIcon'
import ShapeBottom from '../UI/ShapeBottom'
import AuthContext from '../store/auth-context'

const LogIn = () => {
  const introTitle = 'Welcome back!';
  const introText = 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don\'t look even slightly believable. If you are going to use a passage of Lorem Ipsum.';

  const [inputs, setInputs] = useState({});

  const ctx = useContext(AuthContext);

  const navigate = useNavigate();

  const changeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    
    setInputs(values => ({ ...values, [name]: value }));
  };

  const submitHandler = async (event) => {
    event.preventDefault();

    const response = await fetch(
      'http://localhost:80/cms-api/login.php', 
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(inputs),
      }
    );

    const data = await response.json();

    console.log(data);

    if(data.status === 1){
      ctx.onLogin(data.nationalId);
    }

  };

  useEffect(() => {
    if(ctx.isLoggedIn){
      navigate('/my-complaints')
    }
  
  }, [ctx])
  

  return (
    <div className='main d-flex align-items-center'>
      <div className='container h-100'>
        <div className='row align-items-center h-100'>
          <div className='col-sm-12 col-lg-7 mb-4 mb-lg-0'>
            <Intro title={introTitle} text={introText} />
          </div>
          <div className='col-sm-12 col-lg-5'>
            <div className="form p-5 pb-4 m-5 me-0">
              <p className="text-center font-weight-bold mb-4">Log In</p>
              <form onSubmit={submitHandler}>
                <InputWithIcon
                  iconClasses='fas fa-id-card fa-fw'
                  inputClasses='py-4'
                  type='text'
                  id='nationalId'
                  name='nationalId'
                  placeholder='National ID'
                  onChange={changeHandler}
                />
                <InputWithIcon
                  iconClasses='fas fa-key fa-fw'
                  inputClasses='py-4'
                  type='password'
                  id='password'
                  name='password'
                  placeholder='Password'
                  onChange={changeHandler}
                />
                <Button type='submit' text='Log In' className='full-width mt-5' style={{fontSize: '16px'}} />
                <hr className='mt-5 mb-4' />
                <p className="text-center text-muted">Don't have an account? <Link to="/signup" className='text-primary'>Sign Up</Link></p>
              </form>
            </div>
          </div>
        </div>
      </div>
      <ShapeBottom />
    </div>
  )
}

export default LogIn