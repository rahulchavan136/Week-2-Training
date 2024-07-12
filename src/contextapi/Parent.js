import React from 'react';
 import Child from './Child';
import { UserProvider } from './UserContext';

const Parent = () => {
    return (
        <UserProvider>
            <Child />
        </UserProvider>
    );
};

export default Parent;
