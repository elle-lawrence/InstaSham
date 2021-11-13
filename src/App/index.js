import React, { useEffect, useState } from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';
import './App.scss';
import Routes from '../routes';
import Login from '../views/Login';
import { AppNavbar } from '../components/instasham-design-system';

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    firebase.auth().onAuthStateChanged((authed) => {
      if (authed) {
        const userInfoObj = {
          fullName: authed.displayName,
          profileImage: authed.photoURL,
          uid: authed.uid,
          username: authed.email.split('@')[0],
        };
        setUser(userInfoObj);
      } else if (user || user === null) {
        setUser(false);
      }
    });
  }, []);

  return (
    <>
      {user ? (
        <>
          <AppNavbar userInfo={user} />
          <Routes />
        </>
      ) : (
        <Login user={user} />
      )}
    </>
  );
}

export default App;
