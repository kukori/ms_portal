import React, {Fragment, useEffect} from 'react';
import Navbar from './components/layout/Navbar';
import Home from './components/pages/Home';
import AdminHome from './components/pages/AdminHome';
import AdminList from './components/pages/AdminList';
import AddAdminModal from './components/admin/AddAdminModal';
import Login from './components/auth/Login';
import PrivateRoute from './routing/PrivateRoute';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import { loadUser } from './actions/authActions';
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';
import './App.css';

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
            <div className="section">
              <div className="container">
                <AddAdminModal />
                <Switch>
                  <Route exact path='/' component={Home} />
                  <Route exact path='/admin_login' component={Login} />
                  <PrivateRoute exact path='/admin' component={AdminHome} />
                  <PrivateRoute exact path='/admins/manage' component={AdminList} />
                </Switch>
              </div>
            </div>
        </Fragment>
      </Router>
    </Provider>
  );
}

export default App;
