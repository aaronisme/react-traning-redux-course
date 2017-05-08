import React from 'react';
import { Authenticate } from '../../components';
import auth from '../../helpers/auth'

const handleAuth = () => {
  auth().then(console.log)
};

const AuthContainer = () => (
  <Authenticate
    onAuth={() => handleAuth()}
    isFetching={false}
    error=''
  />
);

export default AuthContainer;
