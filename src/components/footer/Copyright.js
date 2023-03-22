import React from 'react'

const Copyright = () => {
  const icons = [
    {icon: 'fab fa-facebook-square fa-fw', url: '#'},
    {icon: 'fab fa-google-plus-g fa-fw', url: '#'},
    {icon: 'fab fa-twitter fa-fw', url: '#'},
  ];

  return (
    <div className="copyright col-12 col-sm-6 col-md-4 mb-4 mb-md-0">
        <h4 className="font-weight-bold mb-2">Demo Name</h4>
        <p>© 2021 Demo Name <br /> All rights reserved.</p>
        <ul className="list-unstyled m-0 py-3">
          {
            icons.map((icon, index) => 
              <li className="me-3 d-inline-block" key={index}>
                <a href={icon.url}>
                  <i className={icon.icon}></i>
                </a>
              </li>
            )
          }
        </ul>
    </div>
  )
}

export default Copyright