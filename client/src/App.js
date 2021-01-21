import React from 'react';

import './App.css'

import Home from './components/home/Home';
import NoMatch from './components/nomatch/NoMatch';
import Navbar from './components/navbar/Navbar';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import FetchUser from './components/auth/FetchUser';
// import ProtectedRoute from './components/auth/ProtectedRoute'
import Dub from './components/doubleornothing/DoubleOrNothing'

import { Switch, Route, } from 'react-router-dom';
import { Container, } from "semantic-ui-react";

const App = () => (
  <>
    <Navbar />
    <FetchUser>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/doubleornothing" component={Dub} />
        <Route component={NoMatch} />
      </Switch>
    </FetchUser>
  </>
)

export default App;