import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const config = {
    apiKey: "AIzaSyDe_gOCerGO3NjanUDbmUrB7vPHteFSaOI",
    authDomain: "clothing-ecommerce-db.firebaseapp.com",
    databaseURL: "https://clothing-ecommerce-db.firebaseio.com",
    projectId: "clothing-ecommerce-db",
    storageBucket: "",
    messagingSenderId: "771276297042",
    appId: "1:771276297042:web:76a412619afad714"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;