import React, { createContext, useEffect, useState } from 'react';


import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from './Components/Home/Home';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import EventView from './Components/EventView/EventView';
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
import HomeDefault from './Components/Home/Default'
import savedEvents from './Components/SavedEvents/savedEvents'
import Logout from './Components/Logout/Logout'
import AboutUs from './Components/AboutUs/AboutUs'
import Settings from './Components/Settings/Settings'
import MultiStepForm from './Components/StartNewEvent/MultiStepForm'


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
            <Route path="/" component={Home} exact />
            <Route path="/login" component={Login} />
            <Route path="/signup" component={Register} />
            <PrivateRoute path="/userpage" component={UserPage} />
            <Route path="/contact" component={ContactForm} />

            <Route path="/viewOneEvent/:eventId" component={EventView} />
            <Route
              path="/viewBySelectedLocation/:eventLocation"
              component={LocationEventView}
            />
            <Route
              path="/viewBySelectedCategory/:categoryId"
              component={CategoryEventView}
            />

            <Route path="/resetPassword" component={Resetpasswordpage} />
            <Route path="/forgotPassword" component={Forgotpasswordpage} />
            <Route path="/savedEvent" component={savedEvents} />
            <Route path="/startNewEvent" component={MultiStepForm} exact />
            <Route path="/editProfile" component={Profilepage} />

            <Route path="/about" component={AboutUs} />
            {/* <Route path='/profileUser' component={Profilepage} /> */}

            <Route path="/settings" component={Settings} />

            <Route path="/logout" component={Logout} />
          </Switch>
        </Notifications>
      </Router>
      <Footer />
    </UserStateContext.Provider>
  );

}

export default App;
