import React from 'react'
import { NavLink } from 'react-router-dom'

import classes from './MainNavigation.module.css';

const NavbarLink = (props) => {
  return (
    <li className='d-inline-block'>
      <NavLink to={props.path} className={({isActive}) => isActive ? classes.active : undefined}>{props.text}</NavLink>
    </li>
  )
}

export default NavbarLink