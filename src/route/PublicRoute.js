import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { isLoading } from '../utlis/Index';

function PublicRoute({component : Component, restricted=false, ...rest}) {
    return( 
        <Route {...rest} render={props => (
            isLoading() && restricted ? 
            <Redirect to="/" /> 
            : 
            <Component {...props} />
        )}
        />
    );
}

export default PublicRoute;
