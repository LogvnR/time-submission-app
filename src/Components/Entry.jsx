import { useState } from 'react';

import classes from '../Styles/Entry.module.css';
import Login from './Login';
import SignUp from './SignUp';

const Entry = () => {
  const [entry, setEntry] = useState(true);

  const entryViewHandler = () => {
    setEntry(!entry);
  };

  return (
    <div className={classes.entry}>
      {entry && <Login entryViewHandler={entryViewHandler} />}
      {!entry && <SignUp entryViewHandler={entryViewHandler} />}
    </div>
  );
};

export default Entry;
