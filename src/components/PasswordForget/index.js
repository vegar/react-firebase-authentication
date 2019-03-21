import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import * as ROUTES from '../../constants/routes';
import { withFirebase } from '../Firebase';

export const PasswordForget = () => (
  <div>
    <h1>PasswordForget</h1>
    <PasswordForgetForm />
  </div>
);

const INITIAL_STATE = {
  email: '',
  error: null,
}

class PasswordForgetFormBase extends Component {
  constructor(props) {
    super(props);

    this.state = { ...INITIAL_STATE };
  }

  onSubmit = (event) => {
    const { email } = this.state;

    this.props.firebase
      .doPasswordReset(email)
      .then(() => {
        this.setState({ ...INITIAL_STATE });
      })
      .cathc((error) => {
        this.setState({ error });
      });

    event.preventDefault();
  }

  onChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  }

  render() {
    const { email, error } = this.state;

    const isInvalid = email === '';

    return (
      <form onSubmit={this.onSubmit}>
        <input name="email"
               value={this.state.email}
               onChange={this.onChange}
               type="text"
               placeholder="Email Address" />
        <button disabled={ isInvalid } type="submit">
          Reset My Password
        </button>

        { error && <p>{ error.message }</p> }
      </form>
    );
  }
}

export const PasswordForgetForm = withFirebase(PasswordForgetFormBase);

export const PasswordForgetLink = () => (
  <p>
    <Link to={ ROUTES.PASSWORD_FORGET }>Forgot Password</Link>
  </p>
)
