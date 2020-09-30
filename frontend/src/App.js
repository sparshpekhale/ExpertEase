import React from 'react';
import './App.css';
import Users from './user/pages/Users.js'
// import NewPlace from './places/pages/NewPlace'
import {BrowserRouter as Router , Route, Redirect, Switch } from 'react-router-dom';
import MainNavigation from './shared/components/Navigation/MainNavigation';
import UserProfile from './profile/pages/UserProfile';
import UpdateProfile from './profile/pages/UpdateProfile';

function App() {
  

  return (
    <Router>
      <MainNavigation/>
      <main>
      <Switch>
        <Route path="/" exact >
          <Users/>
        </Route>
        <Route path="/:userId/profile" exact> 
          <UserProfile/>
        </Route>
        <Route path="/profile/:profileId" >
          <UpdateProfile/>
        </Route> 
        <Redirect to='/'/>
        </Switch>
        </main>
    </Router>
  );
}

export default App;
