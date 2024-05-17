import React from 'react'
import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';

function PrivateRoute() {
    const { user } = useSelector((state) => state);
    console.log(user,"user protected");
    return user.login ? <Outlet /> : <Navigate to="/" replace />;
  
}

export default PrivateRoute