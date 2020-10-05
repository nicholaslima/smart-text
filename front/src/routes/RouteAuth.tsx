

import React from 'react';
import { Route,Redirect,RouteProps } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

interface RouteType extends RouteProps{
    component: React.ComponentType;
    isPrivate? : Boolean;
}

const RouteAuth: React.FC<RouteType> = ({ component: Component,isPrivate = false,...rest }) => {

    const { user } = useAuth();

    return(
        <Route {...rest} 
            render= {({ location }) => {
                return isPrivate === !!user ? (
                    <Component />
                ) : (
                    <Redirect to={{ 
                        pathname: isPrivate ? '/' : '/jogar',
                        state: { from: location },
                    }} ></Redirect>
                );
            }}
        />
    )
}

export default RouteAuth;