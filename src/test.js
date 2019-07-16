import firebase from 'firebase/app';
import 'firebase/firestore';

const firestore = firebase.firestore();

console.log(firestore.collection('users').doc('PGJeM0CRA6LyJh8Gi88S'));