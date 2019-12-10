import React from 'react';
import './App.css';
import {BrowserRouter, Route} from 'react-router-dom';

import Home from './pages/home/home';
import Login from './pages/login/login';
import Register from './pages/register/register';
import Header from './components/header/header';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header/>
        <Route exact path="/" component={Home}/>
        <Route path="/login" component={Login}/>
        <Route path="/register" component={Register}/>
      </BrowserRouter>
    </div>
  );
}

export default App;
