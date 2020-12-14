import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
//pages
import Login from './pages/login';
import Home from './pages/home';
import Transfer from './pages/transfer';

export default function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path= "/" component={Login} />
        <Route path= "/mock/home" component={Home} />
        <Route path= "/mock/transfer" component={Transfer}/>
      </Switch>
    </BrowserRouter>
  );
}
