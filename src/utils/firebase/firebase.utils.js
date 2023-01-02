import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
} from "firebase/auth";

import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";
// Web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCNMLg979JulbQGRWhEE7amjK-NIEuVyVk",
  authDomain: "clothing-db-6dbf8.firebaseapp.com",
  projectId: "clothing-db-6dbf8",
  storageBucket: "clothing-db-6dbf8.appspot.com",
  messagingSenderId: "124472250257",
  appId: "1:124472250257:web:2b0d343ea831554581d430",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (
  userAuth,
  additionalInformation = {}
) => {
  const userDocRef = doc(db, "users", userAuth.uid);
  const userSnapshot = await getDoc(userDocRef);
  console.log(userSnapshot);
  if (!userSnapshot.exists()) {
    const { displayName, email } = await userAuth;
    const date = new Date();
    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        date,
        ...additionalInformation
      });
    } catch (error) {
      console.log("The error message is" + error);
    }
  }
};

export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;

  return await createUserWithEmailAndPassword(auth, email, password);
};
