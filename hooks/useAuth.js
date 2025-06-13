import { View, Text } from 'react-native'
import React, { createContext, useContext } from 'react'

/*
  AuthContext
  For more info: https://react.dev/reference/react/createContext
*/
const AuthContext = createContext({});

/*
  AuthProvider
  This file provides authentication context to the app.
  It can be used to manage user state, login, logout, etc.
  The children prop encompasses App.js components encompassed by AuthProvider (i.e. StackNavigator)
*/
export const AuthProvider = ({ children }) => {
  return (
    <AuthContext.Provider value={{
      user: "Ethan",
    }}>
      {children}
    </AuthContext.Provider>
  );
};

/*
  useAuth
  This hook allows components to access the authentication context.
  It can be used to get the user state, login, logout, etc.
*/
export default function useAuth() {
  return useContext(AuthContext);
}