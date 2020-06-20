import firebase from 'firebase/app'
import 'firebase/firestore'
// Get a Firestore instance
const db = firebase
	.initializeApp({
    apiKey: "AIzaSyD8tps-69sYsILiQ9_Fu_ECa4c4ZKP2w9c",
    authDomain: "dochazkovy-system-7dff5.firebaseapp.com",
    databaseURL: "https://dochazkovy-system-7dff5.firebaseio.com",
    projectId: "dochazkovy-system-7dff5",
    storageBucket: "dochazkovy-system-7dff5.appspot.com",
    messagingSenderId: "641338881630",
    appId: "1:641338881630:web:4b9cea64ea073916d7e6cf",
    measurementId: "G-M3XLN7DXQY"
	})
	.firestore()
export default db

