import React from 'react';
import { PasswordChangeForm, PasswordForgetForm } from '../';

import { AuthUserContext, withAuthorization } from '../Session';

const Account = () => (
  <AuthUserContext.Consumer>
    {(authUser) => (
      <div>
        <h1>Account: { authUser.displayName || authUser.email }</h1>
        <PasswordChangeForm />
        <PasswordForgetForm />
      </div>
    )}
  </AuthUserContext.Consumer>
);

const condition = (authUser) => !!authUser;

export default withAuthorization(condition)(Account);
