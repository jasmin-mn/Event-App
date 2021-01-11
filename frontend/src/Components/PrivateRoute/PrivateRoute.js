import React from 'react'
import { Route, Redirect } from 'react-router-dom';

export default function PrivateRoute(props) {

    const loggedIn = localStorage.getItem("loggedIn");

    return (
        <>
            {loggedIn ? <Route {...props} /> : null}            
        </>
    )
}
