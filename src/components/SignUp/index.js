import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { SIGN_UP, HOME } from '../../constants/routes';
import { withFirebase } from '../';
import { compose } from 'recompose';

const SignUp = () => (
  <div>
    <h1>SignUp</h1>
    <SignUpForm />
  </div>
);

const INITIAL_STATE = {
  username: '',
  email: '',
  passwordOne: '',
  passwordTwo: '',
  error: null
}

class SignUpFormBase extends Component {
  constructor(props) {
    super(props);

    this.state = { ...INITIAL_STATE };
  }

  onSubmit = (event) => {
    const { username, email, passwordOne } = this.state;

    this.props.firebase
      .doCreateUserWithEmailAndPassword(email, passwordOne)
      .then(authUser => {
        this.setState({...INITIAL_STATE});
        this.props.history.push(HOME.url);
      })
      .catch(error => {
        this.setState({ error });
      });

      event.preventDefault();
  }

  onChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render () {
    const { username, email, passwordOne, passwordTwo, error } = this.state;

    const isInvalid =
      passwordOne !== passwordTwo ||
      passwordOne === '' ||
      email === '' ||
      username === '';

    return (
      <form onSubmit={this.onSubmit}>
        <input
          name="username"
          value={username}
          onChange={this.onChange}
          type="text"
          placeholder="Full Name" />
        <input
          name="email"
          value={email}
          onChange={this.onChange}
          type="text"
          placeholder="Email" />
        <input
          name="passwordOne"
          value={passwordOne}
          onChange={this.onChange}
          type="password"
          placeholder="Password" />
        <input
          name="passwordTwo"
          value={passwordTwo}
          onChange={this.onChange}
          type="password"
          placeholder="Confirm password" />
        <button type="submit" disabled={isInvalid}>Sign Up</button>

         {error && <p>{error.message}</p>}
      </form>
    )
  }
}

const SignUpForm = compose(withRouter, withFirebase)(SignUpFormBase);

const SignUpLink = () => (
  <p>
    Don't have an account? <Link to={SIGN_UP.url}>{SIGN_UP.name}</Link>
  </p>
);

export { SignUp, SignUpLink };
