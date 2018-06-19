
//https://firebase.google.com/docs/web/setup
//https://firebase.google.com/docs/reference/

import * as firebase from "firebase";

const config = {
    apiKey: "AIzaSyBdLoA4k_jlRaSZDH5Qs9NjW8eReHEDeQ4",
    authDomain: "tejavakalapudi-2a65b.firebaseapp.com",
    databaseURL: "https://tejavakalapudi-2a65b.firebaseio.com",
    projectId: "tejavakalapudi-2a65b",
    storageBucket: "tejavakalapudi-2a65b.appspot.com",
    messagingSenderId: "9717763484"
};

firebase.initializeApp( config );
const database = firebase.database();
const storageRef = firebase.storage().ref();

export { firebase, database, storageRef };