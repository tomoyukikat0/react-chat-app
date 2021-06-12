import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyCNn8xnRPuP2bGO-s_WnA4qe-mPFxnuXvk",
  authDomain: "react-chat-app-836bf.firebaseapp.com",
  databaseURL: "https://react-chat-app-836bf-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "react-chat-app-836bf",
  storageBucket: "react-chat-app-836bf.appspot.com",
  messagingSenderId: "134614997295",
  appId: "1:134614997295:web:e50b44345eeb6c9f0ae9da"
};

firebase.initializeApp(firebaseConfig);
const database = firebase.database();
const messageRef = database.ref('messages')

export const pushMessage = ({ name, text }) => {
  messageRef.push({ name, text });
};