import firebase from 'firebase/app'
import "firebase/auth"
import "firebase/firestore"

const app = firebase.initializeApp({
    apiKey: "AIzaSyDTuv2imUd4PzlBd3yzf-aTPc7BOEsPrbQ",
    authDomain: "helpage-ad24d.firebaseapp.com",
    projectId: "helpage-ad24d",
    storageBucket: "helpage-ad24d.appspot.com",
    messagingSenderId: "698061356537",
    appId: "1:698061356537:web:68f506f3451e91ff2d9128"

})

export const db=firebase.firestore()

export const auth = app.auth()
export default app
