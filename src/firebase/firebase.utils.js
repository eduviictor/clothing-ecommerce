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

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if(!userAuth) return;
    
    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get();

    if(!snapShot.exists){
        const { displayName, email } = userAuth;
        const createdAt = new Date();
        try{
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        }catch(error){
            console.log('error creating user', error.message);
        }
    }

    return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;