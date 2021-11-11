import axios from 'axios';
import firebase from 'firebase/app';
import firebaseConfig from './firebaseHelper';

const dbUrl = firebaseConfig.databaseURL;

const getCurrentUsersUid = () => firebase.auth().currentUser?.uid;

const getUserByUid = async (uid) => {
  const response = await axios.get(`${dbUrl}/users.json?orderBy="uid"&equalTo="${uid}"`);
  return response;
};

export { getUserByUid, getCurrentUsersUid };
