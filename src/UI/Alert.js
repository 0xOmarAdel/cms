import React from 'react'
import { Link } from 'react-router-dom'

import classes from './Alert.module.css';

const Alert = (props) => {
  return (
    <Link to={props.path} className={`d-block mb-4 p-0 ${props.className ? props.className : ''}`}>
      <div className={classes.alert}>
        <div className='row align-items-center'>
          {
            props.icon
              ?
                <div className='col-auto p-0'>
                  <i className="fa-solid fa-circle-info"></i>
                </div> 
              : 
                ''
          }
          <div className='col'>
            <p className='d-inline-block'>{props.children}</p>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default Alert