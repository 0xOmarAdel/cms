import React from 'react'
import Copyright from './Copyright'
import Links from './Links'
import Newsletter from './Newsletter'

const Footer = () => {
  return (
    <footer className='pb-4'>
      <div className="container">
        <div className="row">
          <Copyright />
          <Links />
          <Newsletter />
        </div>
      </div>
    </footer>
  )
}

export default Footer