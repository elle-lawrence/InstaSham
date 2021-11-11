import firebase from 'firebase/app';

const getCurrentUsersUid = () => firebase.auth().currentUser?.uid;

const getUserByUid = (uid) => new Promise((resolve) => {
  // TODO: Get single user info based on uid
  const currentUserInfo = { uid };
  resolve(currentUserInfo);
});

export { getUserByUid, getCurrentUsersUid };
