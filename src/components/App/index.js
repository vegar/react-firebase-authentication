import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Navigation from '../Navigation';
import * as ROUTES from '../../constants/routes'
import { Landing, SignIn, SignUp, PasswordForget, Home, Account, Admin } from '../../components';

const App = () => (
  <Router>
    <Navigation />
    <hr />
    <Route exact path={ROUTES.LANDING.url} component={Landing} />
    <Route path={ROUTES.SIGN_UP.url} component={SignUp} />
    <Route path={ROUTES.SIGN_IN.url} component={SignIn} />
    <Route path={ROUTES.PASSWORD_FORGET.url} component={PasswordForget} />
    <Route path={ROUTES.HOME.url} component={Home} />
    <Route path={ROUTES.ACCOUNT.url} component={Account} />
    <Route path={ROUTES.ADMIN.url} component={Admin} />
  </Router>
);

export default App;
