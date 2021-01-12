import React from 'react'
import { Route } from 'react-router-dom';

export default function PrivateRoute(props) {

    const loggedIn = JSON.parse(window.localStorage.getItem("loggedIn")?true:"did not work");

    return (
        <>
            {loggedIn ? <Route {...props} /> : null}            
        </>
    )
}
