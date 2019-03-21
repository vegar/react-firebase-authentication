import React from 'react';
import { PasswordChangeForm, PasswordForgetForm } from '../';

import { withAuthorization } from '../Session';

const Account = () => (
  <div>
    <h1>Account</h1>
    <PasswordChangeForm />
    <PasswordForgetForm />
  </div>
);

const condition = (authUser) => !!authUser;

export default withAuthorization(condition)(Account);
