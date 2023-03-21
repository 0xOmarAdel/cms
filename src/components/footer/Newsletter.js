import React from 'react'

import Button from '../../UI/Button';

const Newsletter = () => {
  return (
    <div className="newsletter col-12 col-sm-6 col-md-4">
        <h5 className="font-weight-bold mb-2">Our Newsletter</h5>
        <p className='mb-3'>Subscribe to receive all new updates about our website!</p>
        <form>
            <input type="email" className="form-control mb-3" placeholder="Email" />
            <Button type="submit" className="btn-primary" text='Subscribe' style={{fontSize: '14px'}} />
        </form>
    </div>
  )
}

export default Newsletter