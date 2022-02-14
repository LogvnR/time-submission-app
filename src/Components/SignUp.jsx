import React from 'react';

import classes from '../Styles/SignUp.module.css';

const SignUp = (props) => {
  return (
    <div className={classes.contianer}>
      <p>Create New Account</p>
      <div className={classes['name-container']}>
        <input type="text" placeholder="First Name" />
        <input type="text" placeholder="Last Name" />
      </div>
      <select name="congregation" id="congregation">
        <option value="0">SELECT AND OPTION</option>
        <option value="coronado">Coronado</option>
      </select>
      <input type="email" placeholder="Email" />
      <input type="password" placeholder="Password" />
      <button type="submit">CREATE</button>
      <p onClick={props.entryViewHandler}>Login</p>
    </div>
  );
};

export default SignUp;
