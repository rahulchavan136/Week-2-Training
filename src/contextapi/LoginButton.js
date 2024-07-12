import React, { useContext } from 'react';
import { LoginContext } from './LoginContext';

const LoginButton = () => {
  const { handleSubmit } = useContext(LoginContext);

  return (
    <button onClick={handleSubmit}>Submit</button>
  );
};

export default LoginButton;
