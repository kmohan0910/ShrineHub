import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
import 'firebase/storage'

const firebaseConfig = {
  apiKey: "AIzaSyA1Vl-sszg4h1IO4fJsxEgls3pwSLF0Qoc",
  authDomain: "shrinehub.firebaseapp.com",
  projectId: "shrinehub",
  storageBucket: "shrinehub.appspot.com",
  messagingSenderId: "803848453244",
  appId: "1:803848453244:web:9cce39dd5ed3454fa5ddf9"
};

// init firebase
firebase.initializeApp(firebaseConfig)

// init services
const projectFirestore = firebase.firestore()
const projectAuth = firebase.auth()
const projectStorage = firebase.storage()

// timestamp
const timestamp = firebase.firestore.Timestamp

export { projectFirestore, projectAuth, timestamp, projectStorage }