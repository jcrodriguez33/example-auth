import React from 'react';
import { Navigate } from 'react-router-dom';
import { isLogin } from '../middleware/auth';

const PrivateRoute = ({ component: Component}) => (
    // Muestra el componente solo si esta logueado. Si no redirige al login    
    isLogin() ? <Component /> : <Navigate to="/"/>
)
export default PrivateRoute;