import React from 'react'
import { useSelector } from 'react-redux';
import { Navigate, Outlet, useLocation} from 'react-router-dom';
function PrivateRoute() {
    const location = useLocation();

    const { user } = useSelector((state) => state);
    return user.login ? <Outlet /> :   <Navigate to="/" replace state={{ from: location }} />
  
}

export default PrivateRoute