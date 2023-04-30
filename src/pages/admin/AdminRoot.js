import React from 'react'
import { Outlet } from 'react-router-dom'
import { AuthContextProvider } from '../../store/admin-auth-context';

const Admin = () => {
  return (
    <AuthContextProvider>
      <Outlet />
    </AuthContextProvider>
  )
}

export default Admin