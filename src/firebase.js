import firebase from 'firebase';

const config = {
  apiKey: "AIzaSyD_QGhKyIdLcnVAQt0PuiFRfqLFWfn8Yc4",
  authDomain: "eventmanager-f7a43.firebaseapp.com",
  databaseURL: "https://eventmanager-f7a43.firebaseio.com",
  projectId: "eventmanager-f7a43",
  storageBucket: "eventmanager-f7a43.appspot.com",
  messagingSenderId: "1060939894929"
};

export const firebaseApp = firebase.initializeApp(config);