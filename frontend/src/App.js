import React, { createContext, useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from './Components/Home/Home';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import EventView from './Components/Home/EventView';
import LocationEventView from './Components/Home/LocationEventView';
import CategoryEventView from './Components/Home/CategoryEventView';

import Login from './Components/Login/Login'
import Register from './Components/Register/Register'
import Profilepage from './Components/Profilepage/Profilepage'

import ContactForm from './Components/Contact/ContactForm';
import Resetpasswordpage from './Components/Resetpasswordpage/Resetpasswordpage'
import Forgotpasswordpage from './Components/Forgotpasswordpage/Forgotpasswordpage'

import UserPage from './Components/UserPage/UserPage'
import PrivateRoute from './Components/PrivateRoute/PrivateRoute'

import Notifications, { NotificationsContext } from './Components/Notifications/Notifications';
import StartNewEvent from './Components/StartNewEvent/StartNewEvent'
import HomeDefault from './Components/Home/Default'
import savedEvents from './Components/SavedEvents/savedEvents'
import Logout from './Components/Logout/Logout'

import './App.css';

export const UserStateContext = createContext();

function App() {

  const [loggedInState, setLoggedInState] = useState(false);

  const setLoggedIn = (state) => {
    if (state) {
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

        <Header />

        <Notifications>


          <Switch>

            <Route path='/' component={Home} exact />
            <Route path='/login' component={Login} />
            <Route path='/signup' component={Register} />
            <PrivateRoute path="/userpage" component={UserPage} />
            <Route path='/contact' component={ContactForm} />

            <Route path='/viewOneEvent/:eventId' component={EventView} />
            <Route path='/viewBySelectedLocation/:eventLocation' component={LocationEventView} />
            <Route path='/viewBySelectedCategory/:eventCategory' component={CategoryEventView} />

            <Route path='/resetPassword' component={Resetpasswordpage} />
            <Route path='/forgotPassword' component={Forgotpasswordpage} />
            <Route path='/savedEvent' component={savedEvents} />
            <Route path='/StartNewEvent' component={StartNewEvent} />
            <Route path='/editProfile' component={Profilepage} />
            <Route path='/logout' component={Logout} />

          </Switch>

        </Notifications>

        <Footer />

      </Router>


    </UserStateContext.Provider>);
}

export default App;
