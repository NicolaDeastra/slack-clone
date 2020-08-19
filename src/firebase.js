import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyB6_GvmgvhVCzp7tuHnkBeh5k9jB2F5z0s",
  authDomain: "slack-clone-865c9.firebaseapp.com",
  databaseURL: "https://slack-clone-865c9.firebaseio.com",
  projectId: "slack-clone-865c9",
  storageBucket: "slack-clone-865c9.appspot.com",
  messagingSenderId: "928161218129",
  appId: "1:928161218129:web:0881f9c6b80b7d5054c270",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GithubAuthProvider();

export { auth, provider };
export default db;
