import * as firebase from 'firebase'

const config = {
    apiKey: "AIzaSyAhe3kiARpSZJi6oDY9WUteUqVSZkAaJRk",
    authDomain: "discoverya-cf33b.firebaseapp.com",
    databaseURL: "https://discoverya-cf33b.firebaseio.com",
    projectId: "discoverya-cf33b",
    storageBucket: "",
    messagingSenderId: "1086904255073"
}

firebase.initializeApp(config);

export default firebase
