import React from 'react';

const context = React.createContext();

const UserContextProvider = context.Provider;
const UserContextConsumer = context.Consumer;

export { UserContextConsumer, UserContextProvider }