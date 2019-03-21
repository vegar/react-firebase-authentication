import React from 'react';

import * as ROLES from '../../constants/roles';

const Admin = () => (
  <div>
    <h1>Admin</h1>
    <p>
      Restricted area! Only users with the admin role are authorized.
    </p>
  </div>
);

const condition = (authUser) =>
  authUser && authUser.roles.include(ROLES.ADMIN);

export default Admin;
