import React, { Children, useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { UserContext } from './App';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from './Firebase.init';

const RequireAuth = ({children}) => {
    const location= useLocation();
    const [user]=useAuthState(auth)
    if(!user){
        return <Navigate to='/login' state={{from :location}} replace></Navigate>
    }
    
    return children
};

export default RequireAuth;