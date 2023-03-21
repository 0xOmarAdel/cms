import React from 'react'
import { Link } from 'react-router-dom'
import Alert from '../UI/Alert'
import Hero from '../UI/Hero'
import Pagination from '../UI/Pagination'

import classes from './MyComplaints.module.css'

const MyComplaints = () => {
  return (
    <>
      <Hero title='My Complaints' />
      <section className='complaints'>
        <div className='container'>
          <div className='row'>
            <Alert path='/create-complaint' className='mb-5' icon>Need help? create a new complaint from here.</Alert>
          </div>
          <div className={`${classes.complaint} mb-3 text-muted`}>
            <Link to='/complaint/1'>
              <div className='row align-items-center'>
                <div className='col-5 ps-0 text-left'>
                  <i className="fa-regular fa-envelope pe-3"></i>
                  <p className='d-inline-block complaint-name'>Lorem ipsum dolor sit amet</p>
                </div>
                <div className='col-2'>
                  <p className='complaint-category'>Water</p>
                </div>
                <div className='col-2'>
                  <p className='complaint-date-created'>03/12/2020</p>
                </div>
                <div className='col-2'>
                  <p className='complaint-last-updated'>10/12/2020</p>
                </div>
                <div className='col-1 pe-0 text-right'>
                  <p className='complaint-status'>Closed</p>
                </div>
              </div>
            </Link>
          </div>
          <div className={`${classes.complaint} mb-3 text-muted`}>
            <div className='row align-items-center'>
              <div className='col-5 ps-0 text-left'>
                <i className="fa-regular fa-envelope pe-3"></i>
                <p className='d-inline-block complaint-name'>Lorem ipsum dolor sit amet</p>
              </div>
              <div className='col-2'>
                <p className='complaint-category'>Water</p>
              </div>
              <div className='col-2'>
                <p className='complaint-date-created'>03/12/2020</p>
              </div>
              <div className='col-2'>
                <p className='complaint-last-updated'>10/12/2020</p>
              </div>
              <div className='col-1 pe-0 text-right'>
                <p className='complaint-status'>Closed</p>
              </div>
            </div>
          </div>
          <div className={`${classes.complaint} mb-3 text-muted`}>
            <div className='row align-items-center'>
              <div className='col-5 ps-0 text-left'>
                <i className="fa-regular fa-envelope pe-3"></i>
                <p className='d-inline-block complaint-name'>Lorem ipsum dolor sit amet</p>
              </div>
              <div className='col-2'>
                <p className='complaint-category'>Water</p>
              </div>
              <div className='col-2'>
                <p className='complaint-date-created'>03/12/2020</p>
              </div>
              <div className='col-2'>
                <p className='complaint-last-updated'>10/12/2020</p>
              </div>
              <div className='col-1 pe-0 text-right'>
                <p className='complaint-status'>Closed</p>
              </div>
            </div>
          </div>
          <div className={`${classes.complaint} mb-3 text-muted`}>
            <div className='row align-items-center'>
              <div className='col-5 ps-0 text-left'>
                <i className="fa-regular fa-envelope pe-3"></i>
                <p className='d-inline-block complaint-name'>Lorem ipsum dolor sit amet</p>
              </div>
              <div className='col-2'>
                <p className='complaint-category'>Water</p>
              </div>
              <div className='col-2'>
                <p className='complaint-date-created'>03/12/2020</p>
              </div>
              <div className='col-2'>
                <p className='complaint-last-updated'>10/12/2020</p>
              </div>
              <div className='col-1 pe-0 text-right'>
                <p className='complaint-status'>Closed</p>
              </div>
            </div>
          </div>
          <div className={`${classes.complaint} mb-3 text-muted`}>
            <div className='row align-items-center'>
              <div className='col-5 ps-0 text-left'>
                <i className="fa-regular fa-envelope pe-3"></i>
                <p className='d-inline-block complaint-name'>Lorem ipsum dolor sit amet</p>
              </div>
              <div className='col-2'>
                <p className='complaint-category'>Water</p>
              </div>
              <div className='col-2'>
                <p className='complaint-date-created'>03/12/2020</p>
              </div>
              <div className='col-2'>
                <p className='complaint-last-updated'>10/12/2020</p>
              </div>
              <div className='col-1 pe-0 text-right'>
                <p className='complaint-status'>Closed</p>
              </div>
            </div>
          </div>
          <div className={`${classes.complaint} mb-3 text-muted`}>
            <div className='row align-items-center'>
              <div className='col-5 ps-0 text-left'>
                <i className="fa-regular fa-envelope pe-3"></i>
                <p className='d-inline-block complaint-name'>Lorem ipsum dolor sit amet</p>
              </div>
              <div className='col-2'>
                <p className='complaint-category'>Water</p>
              </div>
              <div className='col-2'>
                <p className='complaint-date-created'>03/12/2020</p>
              </div>
              <div className='col-2'>
                <p className='complaint-last-updated'>10/12/2020</p>
              </div>
              <div className='col-1 pe-0 text-right'>
                <p className='complaint-status'>Closed</p>
              </div>
            </div>
          </div>
          <div className={`${classes.complaint} mb-3 text-muted`}>
            <div className='row align-items-center'>
              <div className='col-5 ps-0 text-left'>
                <i className="fa-regular fa-envelope pe-3"></i>
                <p className='d-inline-block complaint-name'>Lorem ipsum dolor sit amet</p>
              </div>
              <div className='col-2'>
                <p className='complaint-category'>Water</p>
              </div>
              <div className='col-2'>
                <p className='complaint-date-created'>03/12/2020</p>
              </div>
              <div className='col-2'>
                <p className='complaint-last-updated'>10/12/2020</p>
              </div>
              <div className='col-1 pe-0 text-right'>
                <p className='complaint-status'>Closed</p>
              </div>
            </div>
          </div>
          <div className={`${classes.complaint} mb-3 text-muted`}>
            <div className='row align-items-center'>
              <div className='col-5 ps-0 text-left'>
                <i className="fa-regular fa-envelope pe-3"></i>
                <p className='d-inline-block complaint-name'>Lorem ipsum dolor sit amet</p>
              </div>
              <div className='col-2'>
                <p className='complaint-category'>Water</p>
              </div>
              <div className='col-2'>
                <p className='complaint-date-created'>03/12/2020</p>
              </div>
              <div className='col-2'>
                <p className='complaint-last-updated'>10/12/2020</p>
              </div>
              <div className='col-1 pe-0 text-right'>
                <p className='complaint-status'>Closed</p>
              </div>
            </div>
          </div>
          <div className={`${classes.complaint} mb-3 text-muted`}>
            <div className='row align-items-center'>
              <div className='col-5 ps-0 text-left'>
                <i className="fa-regular fa-envelope pe-3"></i>
                <p className='d-inline-block complaint-name'>Lorem ipsum dolor sit amet</p>
              </div>
              <div className='col-2'>
                <p className='complaint-category'>Water</p>
              </div>
              <div className='col-2'>
                <p className='complaint-date-created'>03/12/2020</p>
              </div>
              <div className='col-2'>
                <p className='complaint-last-updated'>10/12/2020</p>
              </div>
              <div className='col-1 pe-0 text-right'>
                <p className='complaint-status'>Closed</p>
              </div>
            </div>
          </div>
          <div className={`${classes.complaint} mb-3 text-muted`}>
            <div className='row align-items-center'>
              <div className='col-5 ps-0 text-left'>
                <i className="fa-regular fa-envelope pe-3"></i>
                <p className='d-inline-block complaint-name'>Lorem ipsum dolor sit amet</p>
              </div>
              <div className='col-2'>
                <p className='complaint-category'>Water</p>
              </div>
              <div className='col-2'>
                <p className='complaint-date-created'>03/12/2020</p>
              </div>
              <div className='col-2'>
                <p className='complaint-last-updated'>10/12/2020</p>
              </div>
              <div className='col-1 pe-0 text-right'>
                <p className='complaint-status'>Closed</p>
              </div>
            </div>
          </div>
          <Pagination />
        </div>
      </section>
    </>
  )
}

export default MyComplaints