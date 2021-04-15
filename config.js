import *  as firebase from 'firebase' 
require ('@firebase/firestore')
var firebaseConfig = {
    apiKey: "AIzaSyBNIjT3KsdEfaEKlEgEXPtX63OLbsnsiYc",
    authDomain: "booksanta-33a35.firebaseapp.com",
    projectId: "booksanta-33a35",
    storageBucket: "booksanta-33a35.appspot.com",
    messagingSenderId: "473640192536",
    appId: "1:473640192536:web:e970c14146e2a3334b516d"
  };
  firebase.initializeApp(firebaseConfig);
  export default firebase.firestore();
