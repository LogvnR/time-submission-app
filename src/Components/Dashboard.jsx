import React from 'react';

import classes from '../Styles/Dashboard.module.css';

const Dashboard = (props) => {
  return (
    <div>
      <p>Welcome Back {props.userEmail}</p>
      <button onClick={props.logoutHandler}>logout</button>
    </div>
  );
};

export default Dashboard;
