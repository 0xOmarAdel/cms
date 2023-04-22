import { Link } from "react-router-dom";
import Button from "../../UI/Button";
import "./AdminNav.css";

import React, { useState } from 'react';

import { NavLink } from 'react-router-dom';

const Sidebar = (props) => {
  const menuItem = [
    {
      path: 'dashboard',
      name: 'Dashboard',
      icon: 'fa fa-globe-europe'
    },
    {
      path: 'admins',
      name: 'Admins',
      icon: 'fa-solid fa-user-shield'
    },
    {
      path: 'users',
      name: 'Users',
      icon: 'fa-solid fa-users'
    },
    {
      path: 'categories',
      name: 'Categories',
      icon: 'fa-solid fa-list'
    },
    {
      path: 'complaints',
      name: 'Complaints',
      icon: 'fa-solid fa-envelope'
    }
  ]

  return (
    <div className={props.menuIsOpened ? 'sidebar sidebar-opened' : 'sidebar'}>
      <i className='fa-solid fa-bars' onClick={props.toggleMenu}></i>

      <h1>Admin Panel</h1>

      <div className='sidebar-header'>
        <div className='admin d-flex align-items-center'>
          <div className='admin-info d-flex justify-content-center m-auto'>
            <div className='admin-pic m-auto'>
              <img
                src='https://avatarfiles.alphacoders.com/161/thumb-161432.png'
                alt='Admin'
              />
            </div>
            <div className={'d-flex align-items-center pe-0'}>
              <div>
                <p className='admin-name mb-2'>Omar Mohamed</p>
                <p className='admin-role'>Administrator</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <ul>
        {
          menuItem.map((item, index) => (
            <li key={index}>
              <NavLink to={item.path} className='link d-flex align-items-center'>
                <i className={`d-inline-block ${item.icon}`}></i>
                <span className='d-inline-block'>{item.name}</span>
              </NavLink>
            </li>
          ))
        }
      </ul>

    </div>
  );
};

export default Sidebar;