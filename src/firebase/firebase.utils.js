import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyDNSGF-Z-E5aA-LdoXnhNHmZ1inwMYfyKA",
  authDomain: "art-and-craft-4b9b6.firebaseapp.com",
  databaseURL: "https://art-and-craft-4b9b6.firebaseio.com",
  projectId: "art-and-craft-4b9b6",
  storageBucket: "art-and-craft-4b9b6.appspot.com",
  messagingSenderId: "965144581054",
  appId: "1:965144581054:web:33c8a00d18ad950ffedfef",
  measurementId: "G-R3VQM8KPZ6",
};

firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }

  return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
