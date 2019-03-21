import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Navigation from '../Navigation';
import * as ROUTES from '../../constants/routes'

import { Landing, SignIn, SignUp, PasswordForget, Home, Account, Admin } from '../../components';
import { withAuthentication } from '../Session';

class App extends Component {
  render() {
    return (
        <Router>
          <Navigation />
          <hr />
          <Route exact path={ROUTES.LANDING} component={Landing} />
          <Route path={ROUTES.SIGN_UP} component={SignUp} />
          <Route path={ROUTES.SIGN_IN} component={SignIn} />
          <Route path={ROUTES.PASSWORD_FORGET} component={PasswordForget} />
          <Route path={ROUTES.HOME} component={Home} />
          <Route path={ROUTES.ACCOUNT} component={Account} />
          <Route path={ROUTES.ADMIN} component={Admin} />
        </Router>
    )
  };
}

export default withAuthentication(App);
