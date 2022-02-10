import React from 'react';
import './App.css';
import Navigationbar from './components/navbar';


import 'bootstrap/dist/css/bootstrap.css';

import { BrowserRouter as Router, Route } from 'react-router-dom';
import HomePage from './pages/home';


function App() {
  return (
    <Router>
     <Navigationbar/>
        <Route exact path="/">
            <HomePage/>
        </Route>
    </Router>
  );
}

export default App;