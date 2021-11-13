import axios from 'axios';
import firebase from 'firebase/app';
import 'firebase/auth';
import firebaseConfig from './firebaseHelper';

const dbUrl = firebaseConfig.databaseURL;

const getCurrentUsersUid = () => firebase.auth().currentUser?.uid;

const getUserByUid = async (uid) => {
  const response = await axios.get(
    `${dbUrl}/users.json?orderBy="uid"&equalTo="${uid}"`,
  );
  return response;
};

const signInUser = () => {
  const provider = new firebase.auth.GoogleAuthProvider();
  firebase.auth().signInWithPopup(provider);
};

const signOutUser = () => {
  firebase.auth().signOut();
};

export {
  getUserByUid, getCurrentUsersUid, signInUser, signOutUser,
};
