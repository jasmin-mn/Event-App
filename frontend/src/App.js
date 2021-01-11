import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from './Components/Home/Home';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import ContactForm from './Components/Contact/ContactForm';

import './App.css';

function App() {
  return (
    <Router>

      <Header />

      <Switch>

        <Route path='/' component={Home} exact />
        <Route path='/contact' component={ContactForm} />
        {/* <Route path='/login' component={Login} />
        <Route path='/signup' component={Signup} />
        <Route path='/about' component={About} />
        <Route component={Error} /> */}

      </Switch>

      <Footer />

    </Router>);
}

export default App;
