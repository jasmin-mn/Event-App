import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from './Components/Home/Home';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';

import Login from './Components/Login/Login'
import Register from './Components/Register/Register'

import ContactForm from './Components/Contact/ContactForm';


import './App.css';

function App() {
  return (
    <Router>

      <Header />

      <Switch>


        <Route path='/' component={Home} exact />
        <Route path='/login' component={Login} exact />
        <Route path='/signup' component={Register} exact />
        <Route path='/contact' component={ContactForm} exact />


      </Switch>

      <Footer />

    </Router>);
}

export default App;
