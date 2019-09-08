import React,{Component} from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
//import User from './Components/User/user';
import Login from './Components/Auth/Login';
import Dashboard from './Components/Dashboard/Dashboard';
import './App.css';

// const App = () =>(
//   <Router>
//       <Route path="/" exact component={Login} />
//       <Route path="/dashboard" exact component={Dashboard}/>
//   </Router>
// )

class App extends Component{
  render(){
    return(
      <Router>
          <Route path="/" exact component={Login} />
          <Route path="/dashboard" exact component={Dashboard}/>
      </Router>
    )
  }
}

export default App;