import firebase from 'firebase'


  // Your web app's Firebase configuration
  let firebaseConfig = {
    apiKey: "AIzaSyDBbDgsX5qrlKCDBdvdIfylPrqw0fv-oZw",
    authDomain: "firestore-crud-cf90b.firebaseapp.com",
    projectId: "firestore-crud-cf90b",
    storageBucket: "firestore-crud-cf90b.appspot.com",
    messagingSenderId: "604168084782",
    appId: "1:604168084782:web:d5ac2a7d7c59abb8012ebf"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();
