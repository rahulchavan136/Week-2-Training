import React, { useState, useCallback, useMemo } from 'react';
import LoginComponent from './LoginComponent';
import ChildComponent from './ChildComponent';

const ParentComponent = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

     const MemoizedChildComponent = useMemo(() => <ChildComponent />, []);

     const handleLogin = useCallback((valid) => {
        if (valid) {
            setIsLoggedIn(true);
        } else {
            alert('Invalid username or password');
        }
    }, []);

    const handleLogout = () => {
        setIsLoggedIn(false);
        setUsername('');
        setPassword('');
    };

    return (
        <div className='text-center mt-5'>
            <h2>Parent Component</h2>
            {!isLoggedIn ? (
                <LoginComponent onLogin={handleLogin} />
            ) : (
                <>
                    {MemoizedChildComponent}
                    <button onClick={handleLogout}>Logout</button>
                </>
            )}
        </div>
    );
};

export default ParentComponent;
