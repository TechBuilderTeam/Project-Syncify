import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../Providers/AuthProviders/AuthProviders';

const PrivateRoute = ({children}) => {
    // const {user,loading} = useContext(AuthContext);
    
    const loading = false;
    const location = useLocation();
    
    const getUser = () => {
        const userData = localStorage.getItem("user");
        return userData
    }
    const user = getUser();

    if(loading){
        return <span className="loading loading-dots loading-xs"></span>
    }

    if(user){
        return children;
    }
    return (<Navigate to='/login' state={{from: location}} replace></Navigate>
    );
};

export default PrivateRoute;