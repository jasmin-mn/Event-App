import React from 'react';
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

function App() {
  return (
    <Router>

      <Header />

      <Switch>

<<<<<<< HEAD
        <Route path='/' component={Home} exact />
        <Route path='/login' component={Login} exact />
        <Route path='/signup' component={Register} exact />
        <Route path='/contact' component={ContactForm} exact />
=======

        <Route path='/' component={Home} exact/>
       
       <Route path='/login' component={Login} exact />
       <Route path='/signup' component={Register} exact/>
       <PrivateRoute path="/userpage" component={UserPage} />
       
>>>>>>> 4384d40f46bc36cacb7686c47fd057129a64156d

      </Switch>

      <Footer />

    </Router>);
}

export default App;
