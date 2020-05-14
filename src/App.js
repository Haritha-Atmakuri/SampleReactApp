import React from 'react';
import logo from './logo.svg';
import './App.css';
import Dimensions from './Dimensions';
import List from './List';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import  './style.css'
import Nav from './Nav'
import history from './history'

function App() {
  return (    
    <Router forceRefresh={true}>
      <div>     
         <Nav/>
         <Switch>
            <Route path="/dimensions/:id" component={Dimensions}/>
            
            <Route path="/list" component={List}/>
            <Route pat="/" exact component={Home}/>
         </Switch>
      </div>
    </Router>        
    
  );
}
const Home=()=>(
  <div>
    <h1>Home</h1>
  </div>
);

export default App;
