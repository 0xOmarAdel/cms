import React from 'react'
import { Link, useParams } from 'react-router-dom'
import Alert from '../UI/Alert';
import Hero from '../UI/Hero'

import classes from './FAQItem.module.css';

const FAQItem = () => {
  const params = useParams();
  return (
    <>
      <Hero title='Frequently Asked Questions' />
      <section className={`${classes['faq-item']} faq-item py-5`}>
        <div className='container'>
          <div className='row'>
            <div className='col-auto p-0'>
              <Link to='/faq'>
                <i className={`fa-solid fa-arrow-left-long ${classes.arrow}`}></i>
              </Link>
            </div>
            <div className='col mb-4'>
              <h1>{params.item}</h1>
            </div>
          </div>
          <div className='row'>
            <div className='col-8 pe-5'>
              <div className={classes.qa}>
              <p>Q. Pariatur excepteur ipsum laboris tempor?</p>
              <p>A. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut eleifend sapien a bibendum pellentesque. Ut vitae pharetra eros, vitae suscipit nulla.</p>
              </div>
              <div className={classes.qa}>
                <p>Q. Incididunt nisi commodo nostrud commodo adipisicing excepteur laboris amet?</p>
                <p>A. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut eleifend sapien a bibendum pellentesque. Ut vitae pharetra eros, vitae suscipit nulla. Vestibulum placerat ex non justo finibus eleifend. Sed ullamcorper sit amet enim et placerat. Quisque vulputate erat feugiat erat ultricies gravida.</p>
              </div>
              <div className={classes.qa}>
                <p>Q. Magna duis sunt sunt qui consectetur?</p>
                <p>A. In congue justo nisl, eu viverra lacus auctor sed. Duis sem lorem, venenatis vitae commodo a, porta vehicula est. Ut eget turpis scelerisque, hendrerit nisl sed, vehicula dui. Duis orci odio, congue vel dictum vel, tempus quis turpis.</p>
              </div>
              <div className={classes.qa}>
                <p>Q. Fugiat ex eiusmod laboris pariatur ea?</p>
                <p>A. Cillum veniam esse nisi elit elit occaecat irure do ullamco pariatur excepteur.</p>
              </div>
            </div>
            <div className='col-4'>
              <Alert path='/create-complaint' icon>Couldn't find your answer? Create a new complaint from here.</Alert>
              <Alert path='/my-complaints' icon>View your previously created complaints from here.</Alert>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default FAQItem