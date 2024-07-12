import React, { createContext } from 'react';

const UserContext = createContext();

const UserProvider = ({ children}) => {
    const users = [
        { name: "rohit", age: 90 },
        { name: "raju", age: 50 },
        { name: "rahul", age: 30 }
    ];

    return (
        <UserContext.Provider value={users}>
            {children}
        </UserContext.Provider>
    );
};

export { UserContext, UserProvider };
