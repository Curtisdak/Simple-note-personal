import React, { createContext, useState } from 'react';

const UserNameContext = createContext();

const UserNameProvider = ({ children }) => {
    const [value, setValue] = useState("");

    return (
        <UserNameContext.Provider value={{ value, setValue }}>
            {children}
        </UserNameContext.Provider>
    );
};

export { UserNameContext, UserNameProvider };
