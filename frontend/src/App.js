import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from './Components/Home/Home';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';

import Login from './Components/Login/Login'
import Register from './Components/Register/Register'

import ContactForm from './Components/Contact/ContactForm';
import Resetpasswordpage from './Components/Resetpasswordpage/Resetpasswordpage'
import Forgotpasswordpage from './Components/Forgotpasswordpage/Forgotpasswordpage'

import UserPage from './Components/UserPage/UserPage'
import PrivateRoute from './Components/PrivateRoute/PrivateRoute'


import './App.css';

function App() {
  return (
    <Router>

      <Header />

      <Switch>


        <Route path='/' component={Home} exact/>
       
       <Route path='/login' component={Login} exact />
       <Route path='/signup' component={Register} exact/>
       <PrivateRoute path="/userpage" component={UserPage} />
       
       <Route path='/resetPassword' component={Resetpasswordpage}/>
       <Route path='/forgotPassword' component={Forgotpasswordpage}/>
       

      </Switch>

      <Footer />

    </Router>);
}

export default App;
