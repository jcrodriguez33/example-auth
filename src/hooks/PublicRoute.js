import React from 'react';
import { Navigate } from 'react-router-dom';
import { isLogin } from '../middleware/auth';

const PublicRoute = ({ component: Component}) => (
    isLogin() ? <Navigate to="/home" /> : <Component /> 
)

export default PublicRoute;
