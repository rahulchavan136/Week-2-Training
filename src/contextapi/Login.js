import React, { useContext } from 'react';
import { LoginContext } from './LoginContext';
import LoginButton from './LoginButton';

const Login = () => {
    const {
        username,
        password,
        handleUsernameChange,
        handlePasswordChange
    } = useContext(LoginContext);

    return (
        <div className='text-center mt-5'>
            <div>
                <label>
                    Username : &nbsp;
                    <input type="text" value={username} onChange={handleUsernameChange} />
                </label>
            </div><br />
            <div>
                <label>
                    Password : &nbsp;
                    <input type="password" value={password} onChange={handlePasswordChange} />
                </label>
            </div><br />
            <LoginButton />
        </div>
    );
};

export default Login;
