import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyBkwlxfuFS7h89vgN2ZOpBLkdh7gCBiEus",
    authDomain: "project-c777f.firebaseapp.com",
    projectId: "project-c777f",
    storageBucket: "project-c777f.appspot.com",
    messagingSenderId: "907706272774",
    appId: "1:907706272774:web:d387aa8badce81c5680787"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

export default firebase.database();