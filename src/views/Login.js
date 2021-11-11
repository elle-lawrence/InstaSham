import React from 'react';
import PropTypes from 'prop-types';
import { Spinner } from 'reactstrap';
import firebase from 'firebase/app';

export default function Login({ user }) {
  const signInUser = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider);
  };

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
