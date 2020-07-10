import React from 'react';
import './App.css';

import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'

import Home from "./components/Home"
import Login from './components/Login'
import Protected from './components/Protected'
import Logout from './components/Logout'
function App() {
  return (
    <div className="App">
      <Router>
        
        
        <Route path="/logout">
          <Logout />
        </Route> 
        
       
        <Route path="/login"
        render={props=>(
      <Login {...props} />
        )}
        >
        </Route>
    
        <Protected exact path="/" component={Home} />
      </Router>
    </div>
  );
}

export default App; 
