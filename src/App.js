import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import User from './Components/User/user';
import './App.css';

const App = () =>(
  <Router>
      <Route path="/" exact component={User} />
  </Router>
)

export default App;