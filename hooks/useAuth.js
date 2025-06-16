import { View, Text } from 'react-native'
import React, { createContext, useContext, useState, useEffect, use } from 'react'
import * as AuthSession from 'expo-auth-session';

/*
  AuthContext
  For more info: https://react.dev/reference/react/createContext
*/
const AuthContext = createContext({});

const CLIENT_ID = process.env.IOS_CLIENT_ID || process.env.ANDROID_CLIENT_ID

const discovery = {
  authorizationEndpoint: 'https://accounts.google.com/o/oauth2/v2/auth',
  tokenEndpoint: 'https://oauth2.googleapis.com/token',
  revocationEndpoint: 'https://oauth2.googleapis.com/revoke',
};

/*
  AuthProvider
  This file provides authentication context to the app.
  It can be used to manage user state, login, logout, etc.
  The children prop encompasses App.js components encompassed by AuthProvider (i.e. StackNavigator)
*/
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const [request, response, promptAsync] = AuthSession.useAuthRequest(
    {
      clientId: CLIENT_ID,
      scopes: ['openid', 'profile', 'email'],
      redirectUri: AuthSession.makeRedirectUri({
        useProxy: true, // Use proxy for redirect URI
      }),
    },
    discovery
  );
  
  useEffect(() => {
    if (response?.type === 'success') {
      const { authentication } = response;
      // Fetch user info here using the access token
      setUser({ accessToken: authentication.accessToken });
    }
  }, [response]);

  const signInWithGoogle = () => {
    promptAsync(); // This will open the Google sign-in page
  }

  return (
    <AuthContext.Provider value={{
      user,
      signInWithGoogle, // Function to sign in with Google
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