import { useEffect, useState } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
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
import Dashboard from './Components/Dashboard';

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
  }, [user]);

  const navigate = useNavigate();

  const signUp = async () => {
    try {
      const user = await createUserWithEmailAndPassword(
        auth,
        signUpEmail,
        signUpPassword
      );
      console.log(user);
      navigate('/dashboard');
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
      navigate('/dashboard');
    } catch (error) {
      console.log(error.message);
    }
  };

  const logout = async () => {
    await signOut(auth);
    navigate('');
  };

  return (
    <Routes>
      <Route
        path=""
        element={
          <Entry
            setSignUpEmail={setSignUpEmail}
            setSignUpPassword={setSignUpPassword}
            setLoginEmail={setLoginEmail}
            setLoginPassword={setLoginPassword}
            signUpUser={signUp}
            loginUser={login}
          />
        }
      />
      <Route
        path="/dashboard"
        element={<Dashboard logoutHandler={logout} userEmail={user?.email} />}
      />
    </Routes>
  );
};

export default App;
