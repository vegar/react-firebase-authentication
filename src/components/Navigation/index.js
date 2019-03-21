import React from 'react';
import { Link } from 'react-router-dom';

import { ROUTES } from '../../constants/routes'

const Navigation = () => (
  <div>
    <ul>
    {ROUTES.map(l => (<li key={l.name}><Link to={l.url}>{l.name}</Link></li>))}
    </ul>
  </div>
);

export default Navigation;
