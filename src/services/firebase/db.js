
import { initializeApp } from "firebase/app";
import 'firebase/auth';
import { createUserWithEmailAndPassword, updateProfile, getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAMMgmtyHQr-2IZ_sg39O4zoD5HNp45uXo",
  authDomain: "bigkartindia-17052.firebaseapp.com",
  projectId: "bigkartindia-17052",
  storageBucket: "bigkartindia-17052.appspot.com",
  messagingSenderId: "432242700864",
  appId: "1:432242700864:web:ab5f17782db59f9a1465a5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

async function register({firstname, lastname, email, password}) {

    const resp = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );

    await updateProfile(resp.user, {displayName: `${firstname} ${lastname}`});

}

async function login ({email, password}) {
    const resp = await signInWithEmailAndPassword(
      auth, email, password
    )

    return resp.user;
}

async function logout() {
    await signOut(auth);
}

export const firebasedb = {
    register: register,
    login: login,
    logout:logout
}