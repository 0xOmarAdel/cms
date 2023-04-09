import React, { useContext, useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Intro from '../components/Intro'
import Button from '../UI/Button'
import InputWithIcon from '../UI/InputWithIcon'
import ShapeBottom from '../UI/ShapeBottom'
import AuthContext from '../store/auth-context'

const SignUp = () => {
  const introTitle = 'Create an account!';
  const introText = 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don\'t look even slightly believable. If you are going to use a passage of Lorem Ipsum.';
  
  const ctx = useContext(AuthContext);

  const navigate = useNavigate();

  useEffect(() => {
    if(ctx.isLoggedIn){
      navigate('/my-complaints')
    }
  
  }, [ctx])

  const [inputs, setInputs] = useState({});

  const changeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    
    setInputs(values => ({ ...values, [name]: value }));
  };

  const submitHandler = async (event) => {
    event.preventDefault();

    const response = await fetch(
      'http://localhost:80/cms-api/signup.php', 
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

  };

  return (
    <div className='main d-flex align-items-center'>
      <div className='container h-100'>
        <div className='row align-items-center h-100'>
          <div className='col-sm-12 col-lg-7 mb-4 mb-lg-0'>
            <Intro title={introTitle} text={introText} />
          </div>
          <div className='col-sm-12 col-lg-5'>
            <div className="form p-5 pb-4 m-5 me-0">
              <p className="text-center font-weight-bold mb-4">Sign Up</p>
              <form onSubmit={submitHandler}>
                <InputWithIcon
                  iconClasses='fas fa-user fa-fw'
                  inputClasses='py-4'
                  type='text'
                  id='name'
                  name='name'
                  placeholder='Name'
                  onChange={changeHandler}
                />
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
                  iconClasses='fas fa-envelope-open fa-fw'
                  inputClasses='py-4'
                  type='text'
                  id='email'
                  name='email'
                  placeholder='Email'
                  onChange={changeHandler}
                />
                <InputWithIcon
                  iconClasses='fa-solid fa-phone fa-fw'
                  inputClasses='py-4'
                  type='text'
                  id='phone'
                  name='phone'
                  placeholder='Phone'
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
                <Button type='submit' text='Sign Up' className='full-width mt-5' style={{fontSize: '16px'}} />
                <hr className='mt-5 mb-4' />
                <p className="text-center text-muted">Already have an account? <Link to="/login" className='text-primary'>Log In</Link></p>
              </form>
            </div>
          </div>
        </div>
      </div>
      <ShapeBottom />
    </div>
  )
}

export default SignUp