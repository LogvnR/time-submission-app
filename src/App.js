import { useEffect, useState } from 'react';
import { db, auth } from './firebase';
import { collection, onSnapshot } from 'firebase/firestore';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from 'firebase/auth';

import './App.css';
import Entry from './Components/Entry';

const App = () => {
  const [signUpEmail, setSignUpEmail] = useState('');
  const [signUpPassword, setSignUpPassword] = useState('');
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [user, setUser] = useState({});

  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  });

  useEffect(() => {
    onSnapshot(collection(db, 'users'), (snapshot) => {
      console.log(snapshot.docs.map((doc) => doc.data()));
    });
  }, []);

  const signUp = async () => {
    try {
      const user = await createUserWithEmailAndPassword(
        auth,
        signUpEmail,
        signUpPassword
      );
      console.log(user);
    } catch (error) {
      console.log(error.message);
    }
  };

  const login = async () => {
    try {
      const user = await signInWithEmailAndPassword(
        auth,
        loginEmail,
        loginPassword
      );
      console.log(user);
    } catch (error) {
      console.log(error.message);
    }
  };

  const logout = async () => {
    await signOut(auth);
  };

  return (
    <>
      <Entry
        setSignUpEmail={setSignUpEmail}
        setSignUpPassword={setSignUpPassword}
        setLoginEmail={setLoginEmail}
        setLoginPassword={setLoginPassword}
        signUpUser={signUp}
        loginUser={login}
      />
      <p>{user?.email}</p>
      <button onClick={logout}>logout</button>
    </>
  );
};

export default App;
