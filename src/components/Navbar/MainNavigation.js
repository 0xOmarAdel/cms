import { Link } from 'react-router-dom';
import classes from './MainNavigation.module.css';
import NavbarLink from "./NavbarLink";

const MainNavigation = () => {
  const navLinks = [
    {path: '/', text: 'Home'},
    {path: '/faq', text: 'FAQ'},
    {path: '/login', text: 'Log In'},
    {path: '/signup', text: 'Sign Up'},
  ]

  return ( 
    <header className={classes.header}>
      <div className='container'>
        <div className='row'>
          <div className='col'>
            <p className='m-0'><Link to='/'>Logo</Link></p>
          </div>
          <nav className='col'>
          <ul className={'d-flex h-100 justify-content-end align-items-center ' + classes.list}>
            {
              navLinks.map((navLink, index) => <NavbarLink key={index} path={navLink.path} text={navLink.text} />)
            }
            </ul>
          </nav>
         </div>
      </div>
    </header>
  );
}
 
export default MainNavigation;