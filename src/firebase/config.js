import firebase from 'firebase/app'
import 'firebase/storage';
import 'firebase/firestore';

var firebaseConfig = {
  apiKey: "AIzaSyCjQ-kY4nJcs6xSAkuJsYbcQOUKO_KmJeo",
  authDomain: "firgram-b8ee4.firebaseapp.com",
  projectId: "firgram-b8ee4",
  storageBucket: "firgram-b8ee4.appspot.com",
  messagingSenderId: "644817615181",
  appId: "1:644817615181:web:a8e38d96f4ade7ca4fdf04"
};

firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };