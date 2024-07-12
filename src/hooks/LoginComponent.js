import React, { useState, useCallback } from 'react';

const LoginComponent = ({ onLogin }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

     const handleLogin = useCallback(() => {
         if (username === 'user' && password === 'password') {
            onLogin(true);
        } else {
            onLogin(false);
        }
    }, [username, password, onLogin]);

    return (
        <div className='text-center mt-5'>
            <h3>Login Component</h3>
            <input
                type="text"
                placeholder="Enter username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />
            <br />
            <input
                type="password"
                placeholder="Enter password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <br />
            <button onClick={handleLogin}>Login</button>
        </div>
    );
};

export default LoginComponent;
