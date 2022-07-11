import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';


//2. Initialize app with the config vars
 firebase.initializeApp({
    apiKey: "AIzaSyDKrn0f-c59Eg0cWGQG58CGxVD6NA47Lbc",
    authDomain: "linkedin-61517.firebaseapp.com",
    projectId: "linkedin-61517",
    storageBucket: "linkedin-61517.appspot.com",
    messagingSenderId: "9964420385",
    appId: "1:9964420385:web:db6591d47df642a01e9260",
    measurementId: "G-96FCN54QMK"
});

export const auth = firebase.auth();
const googleProvider = new firebase.auth.GoogleAuthProvider()

export const signInWithGoogle = () => {
  auth.signInWithPopup(googleProvider).then((res) => {
    console.log(res.user)
  }).catch((error) => {
    console.log(error.message)
  })
}

export const logOut = () => {
    auth.signOut().then(()=> {
      console.log('logged out')
    }).catch((error) => {
      console.log(error.message)
    })
  }
