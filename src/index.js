// src/index.js
import React from 'react';
import ReactDOM from 'react-dom';
import Home from './Home'
import About from './About'
import Login from './Login'
import Navbar from './Navbar'
import { BrowserRouter as Router, Route } from 'react-router-dom';


// ReactDOM.render((
//   <Router>
//    <Route path="/" component={Home}/><Route exact path="/about" component={About} /><Route exact path="/login" component={Login} /></Router>),
//   document.getElementById('root')
// );

const Signup = () => <h1>This is my signup component!</h1>;
const Messages = () => <h1>This is my messages component!</h1>;

ReactDOM.render((
  <Router>
    <div>
      <Navbar />
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/signup" component={Signup} />
      <Route exact path="/messages" component={Messages} />
    </div>
  </Router>),
  document.getElementById('root')
);