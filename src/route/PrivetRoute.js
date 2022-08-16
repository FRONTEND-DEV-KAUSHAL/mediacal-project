import React from 'react';
import { Route } from 'react-router-dom';
import { isLoading } from '../utlis/Index';

function PrivetRoute({component : Component , ...rest}) {
    return (
       <Route {...rest} render={props =>(
        isLoading() ?
        <Component {...props} />
        :
        <Redirect to={"/Auth"} /> 
       )
    }  

       />
    );
}

export default PrivetRoute;
