import React, { createContext, useState } from 'react';

export const LoginContext = createContext();

export const LoginProvider = ({ children }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

//   const handleSubmit = () => {
//     console.log('Username:', username);
//     console.log('Password:', password);
//   };

  const handleSubmit = () => {
    const correctUsername = 'admin';
    const correctPassword = 'password';
    
    if (username === correctUsername && password === correctPassword) {
      alert('login sucess');
    } else {
      alert('Wrong usernamee and  password');
    }
    console.log('Username==>', username);
    console.log('Password==>', password);
  };

  return (
    <LoginContext.Provider value={{
      username,
      password,
      handleUsernameChange,
      handlePasswordChange,
      handleSubmit
    }}>
      {children}
    </LoginContext.Provider>
  );
};
