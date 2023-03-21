import React from 'react'
import { Link } from 'react-router-dom'
import Intro from '../components/Intro'
import Button from '../UI/Button'
import InputWithIcon from '../UI/InputWithIcon'
import ShapeBottom from '../UI/ShapeBottom'

const SignUp = () => {
  const introTitle = 'Create an account!';
  const introText = 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don\'t look even slightly believable. If you are going to use a passage of Lorem Ipsum.';

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
              <form>
                <InputWithIcon
                  iconClasses='fas fa-user fa-fw'
                  inputClasses='py-4'
                  type='text'
                  id='name'
                  placeholder='Name'
                />
                <InputWithIcon
                  iconClasses='fas fa-id-card fa-fw'
                  inputClasses='py-4'
                  type='text'
                  id='nationalId'
                  placeholder='National ID'
                />
                <InputWithIcon
                  iconClasses='fas fa-envelope-open fa-fw'
                  inputClasses='py-4'
                  type='text'
                  id='email'
                  placeholder='Email'
                />
                <InputWithIcon
                  iconClasses='fas fa-key fa-fw'
                  inputClasses='py-4'
                  type='password'
                  id='password'
                  placeholder='Password'
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