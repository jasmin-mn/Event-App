import React, { createContext, useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from './Components/Home/Home';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';

import Login from './Components/Login/Login'
import Register from './Components/Register/Register'

import ContactForm from './Components/Contact/ContactForm';

import UserPage from './Components/UserPage/UserPage'
import PrivateRoute from './Components/PrivateRoute/PrivateRoute'


import './App.css';

export const UserStateContext = createContext();

function App() {

  const [loggedInState, setLoggedInState] = useState(false);

  const setLoggedIn = (state) => {
    if(state) {
       window.localStorage.setItem("loggedIn", JSON.stringify(true));
    } else {
      window.localStorage.removeItem('loggedIn');
    }
   
    setLoggedInState(state);
  }

  useEffect(() => {
    if (JSON.parse(window.localStorage.getItem("loggedIn"))) {
      setLoggedInState(true);
    };
  }, [])

  return (
    <UserStateContext.Provider value={{ loggedInState, setLoggedIn }}>
      <Router>

        <Header  />

        <Switch>


        <Route path='/' component={Home} exact/>
        
        <Route path='/login' component={Login} exact />
        <Route path='/signup' component={Register} exact/>
        <PrivateRoute path="/userpage" component={UserPage} />
        

        </Switch>

        <Footer />

      </Router>
    </UserStateContext.Provider>);
}

export default App;
