import React, { Component } from 'react';

import { withFirebase } from '../Firebase';

class AdminPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: false,
      users: [],
    }
  }

  componentDidMount() {
    this.setState({ loading: true });

    this.snapshotUnsubscribe = this.props.firebase.users().onSnapshot(snapshot => {
      const usersObject = snapshot.docs;

      const usersList = usersObject.map(doc => ({
        ...doc.data(),
        uid: doc.id,
      }));

      this.setState({
        users: usersList,
        loading: false,
      });
    });
  }

  componentWillUnmount() {
    this.snapshotUnsubscribe()
  }


  render() {
    const { users, loading } = this.state;

    return  (
      <div>
        <h1>Admin</h1>
        { loading && <div>Loading...</div> }

        <UserList users={ users } />
      </div>
    )
  }
}

const UserList = ({ users }) => (
  <ul>
    { users.map((user) => (
      <li key={ user.uid }>
        <span>
          <strong>ID:</strong> { user.uid }
        </span>
        <span>
          <strong>E-Mail:</strong> { user.email }
        </span>
        <span>
          <strong>Username:</strong> { user.username }
        </span>
      </li>
    ))}
  </ul>
)

export default withFirebase(AdminPage);
