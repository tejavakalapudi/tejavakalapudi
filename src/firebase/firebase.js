
//https://firebase.google.com/docs/web/setup
//https://firebase.google.com/docs/reference/

import * as firebase from "firebase";

const config = {
    apiKey: "AIzaSyBOp-bYuMy8VXxF13PdVCv0mudnbWb1xVI",
    authDomain: "akruthi-4d551.firebaseapp.com",
    databaseURL: "https://akruthi-4d551.firebaseio.com",
    projectId: "akruthi-4d551",
    storageBucket: "akruthi-4d551.appspot.com",
    messagingSenderId: "867658258327"
};

firebase.initializeApp( config );

const database = firebase.database();
const storageRef = firebase.storage().ref();

export { firebase, database, storageRef };

//storage.ref().child("projects");
//storageRef.child('images/welcomeModal').put( "/images/WelcomeModal.png" );