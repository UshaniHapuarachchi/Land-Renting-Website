import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage'

var firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBh4ltJ1s9Ca_siAwoIxhObW38sv4XXx0Q",
  authDomain: "agrimoe-7b917.firebaseapp.com",
  projectId: "agrimoe-7b917",
  storageBucket: "agrimoe-7b917.appspot.com",
  messagingSenderId: "457482752709",
  appId: "1:457482752709:web:1cc368cfdefceffa8c16ac"
});

var db = firebaseApp.firestore();
const storage = firebase.storage()
export  {
    storage, firebase as default
  }
 

export { db };