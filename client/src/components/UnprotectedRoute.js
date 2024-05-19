import React from 'react'
import { useSelector } from 'react-redux';
import { Navigate, Outlet,useLocation } from 'react-router-dom';

function UnprotectedRoute() {
    const location = useLocation();
const locationTo= location?.state?.from?.pathname||'/programs'

    const { user } = useSelector((state) => state);
 
    return !user.login ? <Outlet /> : <Navigate to={locationTo} replace />;
}

export default UnprotectedRoute