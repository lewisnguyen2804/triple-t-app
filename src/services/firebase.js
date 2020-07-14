import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";

var firebaseConfig = {
    apiKey: "AIzaSyCZqSK9G7kZPSstO1f19u0gyHTLP--xl68",
    authDomain: "triple-t-app.firebaseapp.com",
    databaseURL: "https://triple-t-app.firebaseio.com",
    projectId: "triple-t-app",
    storageBucket: "triple-t-app.appspot.com",
    messagingSenderId: "291228581468",
    appId: "1:291228581468:web:30a7f34df06bd2bb2fb099",
    measurementId: "G-2CW0T880FL"
  };

  firebase.initializeApp(firebaseConfig);
  export const auth = firebase.auth;
  export const db = firebase.database();