import React, {Fragment, useEffect} from 'react';
import Navbar from './components/layout/Navbar';
import Home from './components/pages/Home';
import AdminHome from './components/pages/AdminHome';
import Login from './components/auth/Login';
import PrivateRoute from './routing/PrivateRoute';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';
import { Provider } from 'react-redux';
import store from './store';
import { loadUser } from './actions/authActions';

function App() {
  useEffect(() => {
    // Init Materialize js
    M.AutoInit();
    store.dispatch(loadUser());
  });

  return (
    <Provider store={store}>
      <Router>
        <Fragment>
          <Navbar title={'M S'}/>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/admin_login' component={Login} />
            <PrivateRoute exact path='/admin' component={AdminHome} />
          </Switch>
        </Fragment>
      </Router>
    </Provider>
  );
}

export default App;
