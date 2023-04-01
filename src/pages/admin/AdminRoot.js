import React, { useState } from 'react'
import { Outlet } from 'react-router-dom'

import AdminNav from '../../components/Navbar/AdminNav'

const Admin = () => {
  const [menuIsOpened, setMenuIsOpened] = useState(false);

  const toggleMenuHandler = () => setMenuIsOpened (!menuIsOpened);

  return (
    <>
      <AdminNav toggleMenu={toggleMenuHandler} menuIsOpened={menuIsOpened} />
      <div 
        style={{
          marginLeft: menuIsOpened ? '300px' : '120px', 
          backgroundColor: '#f2f5f7', 
          minHeight: '100vh', 
          color: 'white', 
          padding: '90px 100px',
          transition: '1.2s'
          }}>
        <Outlet />
      </div>
    </>
  )
}

export default Admin