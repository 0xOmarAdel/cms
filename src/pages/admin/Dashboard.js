import React from 'react'

import './Dashboard.css'

const Dashboard = () => {
  const cards = [
    {
      icon: 'fa-solid fa-users',
      title: 'Users',
      number: 50
    },
    {
      icon: 'fa-solid fa-user-shield',
      title: 'Admins',
      number: 50
    },
    {
      icon: 'fa-solid fa-user-shield',
      title: 'Moderators',
      number: 50
    },
    
    {
      icon: 'fa-solid fa-list',
      title: 'Categories',
      number: 50
    },
    {
      icon: 'fa-solid fa-envelope',
      title: 'Complaints',
      number: 50
    }
  ]

  return (
    <div className='admins'>
      <h1 className='mb-5'>Dashboard</h1>
      <div className='cards'>
        <div className='row'>

          {
            cards.map((card, index) => (
              <div className='col-2' key={index}>
                <div className='card'>
                  <i className={card.icon}></i>
                  <p className='card-title'>{card.title}</p>
                  <p className='card-number'>{card.number}</p>
                </div>
              </div>
            ))
          }

        </div>
      </div>
    </div>
  )
}

export default Dashboard