import React from 'react';
import { connect } from 'react-redux';

import User from './User';

const UsersList = (props) => {
  return (
    // <div className="user-list">
    //   {props.users && props.users.map((user) => <User key={user.login.uuid} {...user} />)}
    // </div>

    <div className="row mb-6">
      <ul className="list-unstyled">
        {props.users && props.users.map((user) => <User key={user.login.uuid} {...user} />)}
      </ul>
    </div>

 );
};

const mapStateToProps = (state) => {
  return {
    users: state
  };
};

export default connect(mapStateToProps)(UsersList);