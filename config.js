import * as firebase from 'firebase'
require('@firebase/firestore')

var firebaseConfig = {
    apiKey: "AIzaSyAyRRXeJuLdWgRAKlUKI7SNKW9z0fxL880",
    authDomain: "wily-app-d3a02.firebaseapp.com",
    databaseURL: "https://wily-app-d3a02.firebaseio.com",
    projectId: "wily-app-d3a02",
    storageBucket: "wily-app-d3a02.appspot.com",
    messagingSenderId: "790363642364",
    appId: "1:790363642364:web:fac70f04652ffe69717a79"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore()