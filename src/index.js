import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import {createStore } from 'redux';
import  reducer  from './reducer';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Login from './components/Login';
import Users from './components/Users';
import Signup from './components/Signup';


const store = createStore(reducer);

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Login}/>
        <Route path="/signup" component={Signup}/>
        <Route path="/users" component={Users}/>
      </Switch>
    </BrowserRouter>
  </Provider>,
document.getElementById('root'));

serviceWorker.unregister();
