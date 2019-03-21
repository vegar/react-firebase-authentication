import React from 'react';

const Session = () => (
  <div>
    <h1>Session</h1>
  </div>
);

export default Session;

export { withAuthorization } from './withAuthorization';
export { AuthUserContext } from './context';
export { withAuthentication } from './withAuthentication';
