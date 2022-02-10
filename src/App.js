import React from 'react';
import './App.css';
import navBar from './components/navbar';


import 'bootstrap/dist/css/bootstrap.css';

import { BrowserRouter as Router, Route } from 'react-router-dom';
import homePage from './pages/home';


function App() {
  return (
    <Router>
     <navBar/>
        <Route exact path="/">
            <homePage/>
        </Route>
    </Router>
  );
}

export default App;