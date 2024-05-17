import React from 'react'
import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';

function UnprotectedRoute() {
    const { user } = useSelector((state) => state);
    return !user.login ? <Outlet /> : <Navigate to="/programs" replace />;
}

export default UnprotectedRoute