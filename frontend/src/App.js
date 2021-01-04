import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from './Components/Home';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';

import './App.css';

function App() {
  return (
    <Router>

      <Header />

      <Switch>

        <Route path='/' component={Home} exact />
        {/* <Route path='/contact' component={Contact} />
        <Route path='/login' component={Login} />
        <Route path='/signup' component={Signup} />
        <Route path='/about' component={Help} />
        <Route component={Error} /> */}

      </Switch>

      <Footer />

    </Router>);
}

export default App;
