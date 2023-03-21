import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Button from '../UI/Button'
import Hero from '../UI/Hero'
import ScrollableDiv from '../UI/ScrollableDiv'

import classes from './Complaint.module.css'

const Complaint = () => {
  const params = useParams();

  useEffect(() => {
    document.getElementById("focus").focus();
  }, [])
  

  return (
    <>
      <Hero title='Complaint Name'>
        <p>Electricity - ID: #{params.complaintId}</p>
      </Hero>
      <section className={classes.complaint}>
        <div className='container'>
          <div className='row'>
            <div className='col-sm-12 col-lg-8 mb-5 mb-lg-0'>
              <div className={`${classes.messages} mb-3`}>
                <ScrollableDiv>
                  <div className='row'>
                    <div className='col-7 p-0 ms-auto'>
                      <p className={`${classes.message} ${classes.sent} mb-1`}>Exercitation est nostrud enim aute irure excepteur eu et ea dolor voluptate qui reprehenderit.</p>
                      <p className={`${classes.date} ${classes.sent} mb-3`}>10-12-2022 06:00 AM</p>
                    </div>
                    <div className='col-7 p-0'>
                      <p className={`${classes.message} mb-1`}>Aliquip excepteur ad proident ipsum culpa reprehenderit aute excepteur laboris exercitation.</p>
                      <p className={`${classes.date} mb-3`}>10-12-2022 06:00 AM</p>
                    </div>
                    <div className='col-7 p-0 ms-auto'>
                      <p className={`${classes.message} ${classes.sent} mb-1`}>Nisi cillum aute pariatur dolor proident nisi minim fugiat.</p>
                      <p className={`${classes.date} ${classes.sent} mb-3`}>10-12-2022 06:00 AM</p>
                    </div>
                    <div className='col-7 p-0 ms-auto'>
                      <p className={`${classes.message} ${classes.sent} mb-1`}>Occaecat eu Lorem voluptate deserunt sint adipisicing Lorem non do qui.</p>
                      <p className={`${classes.date} ${classes.sent} mb-3`}>10-12-2022 06:00 AM</p>
                    </div>
                    <div className={`col-7 p-0 ${classes.focus}`} id='focus' tabIndex="0">
                      <p className={`${classes.message} mb-1`}>Aliquip eu Lorem magna velit et laboris excepteur.</p>
                      <p className={`${classes.date} mb-3`}>10-12-2022 06:00 AM</p>
                    </div>
                  </div>
                </ScrollableDiv>
              </div>
              <form>
              <div className='row justify-content-center'>
                <div className='col-12 mb-4 p-0'>
                  <textarea className="form-control" placeholder='Message' style={{ height: '20px !important' }} />
                </div>
                <Button text='Send' className='full-width' />
              </div>
            </form>
            </div>
            <div className='col-sm-12 col-lg-4 ps-5'>
              <ul>
                <li>
                  <p>Complaint Created</p>
                  <p>10-12-2022 06:00 AM</p>
                </li>
                <li>
                  <p>Pending</p>
                  <p>(Admin needs more information)</p>
                  <p>10-12-2022 06:00 AM</p>
                </li>
                <li>
                  <p>Pending</p>
                  <p>(Waiting for admin response)</p>
                  <p>10-12-2022 06:00 AM</p>
                </li>
                <li>
                  <p>Pending</p>
                  <p>(Admin needs more information)</p>
                  <p>10-12-2022 06:00 AM</p>
                </li>
                <li>
                  <p>Pending</p>
                  <p>(Waiting for admin response)</p>
                  <p>10-12-2022 06:00 AM</p>
                </li>
                <li>
                  <p>Closed</p>
                  <p>10-12-2022 06:00 AM</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Complaint