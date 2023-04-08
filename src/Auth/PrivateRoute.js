import React from 'react'
import { Navigate,Outlet } from 'react-router-dom'

function PrivateRoute({user,...rest}) {
  return (
    {...rest},
    user ? (<Outlet/>) : <Navigate replace to={{pathname:'/login'}}/>
  )
}
export default PrivateRoute

