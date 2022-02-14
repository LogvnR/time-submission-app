import React from 'react';

import classes from '../Styles/Login.module.css';

const Login = (props) => {
  return (
    <div className={classes.contianer}>
      <p>LOGIN</p>
      <input type="email" placeholder="Email" />
      <input type="password" placeholder="Password" />
      <button type="submit">LOGIN</button>
      <p onClick={props.entryViewHandler}>Create New Account</p>
    </div>
  );
};

export default Login;
