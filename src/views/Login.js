import React from 'react';
import PropTypes from 'prop-types';
import { Spinner } from 'reactstrap';
import { signInUser } from '../helpers/userHelper';

export default function Login({ user }) {
  return (
    <>
      {user === null ? (
        <Spinner style={{ width: '5rem', height: '5rem' }} color="secondary" />
      ) : (
        <>
          <h1>Welcome to InstaSham!</h1>
          <button type="button" className="btn-success btn" onClick={signInUser}>
            <i className="fas fa-sign-in-alt" />
          </button>
        </>
      )}
    </>
  );
}

Login.propTypes = {
  user: PropTypes.node,
};

Login.defaultProps = {
  user: null,
};
