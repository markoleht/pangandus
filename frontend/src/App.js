import React from 'react';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './components/pages/Home';
import Balance from './components/pages/Balance';
import Transfer from './components/pages/Transfer';
import SignUp from './components/pages/SignUp';
import Login from './components/pages/Login';


function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component= {Home}/>
          <Route path="/balance" component= {Balance}/>
          <Route path="/transfer" exact component= {Transfer}/>
          <Route path="/signup" exact component= {SignUp}/>
          <Route path="/login" exact component= {Login}/>
        </Switch>
      </Router>
    </>
  );
}

export default App;
