import React from 'react';
import { Route, Redirect } from 'react-router-dom';
export const PrivateRoute = ({component: Component, restricted, ...rest}) => {
   
    return (
    
        <Route {...rest} render={props => (
            localStorage.getItem('myData')&& restricted ?
            <Component {...props} />:
             <Redirect to="/" />
            
        )} />
    );
}

export const PublicRoute = ({component: Component, restricted, ...rest}) => {
    
    return (
    
        <Route {...rest} render={props => (
            localStorage.getItem('myData')  ?
            <Redirect to="/" />
            :
           <Component {...props} />
            
            
        

           
            
            
             
            
        )} 
        />
    );
        }