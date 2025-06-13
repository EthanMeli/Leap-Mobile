import React from 'react';
import StackNavigator from './StackNavigator';
import { NavigationContainer } from '@react-navigation/native'; // Necessary import for navigation (actual container for navigation -- more info in docs)
import { AuthProvider } from './hooks/useAuth';

/*
  AuthProvider info found in hooks/useAuth.js
  This file provides authentication context to the app.
*/
export default function App() {
  return (
    <NavigationContainer>
      {/* HOC - Higher Order Component AuthProvider wraps the StackNavigator to provide authentication context */}
      <AuthProvider>
        {/* Passes down the auth to children */}
        <StackNavigator />
      </AuthProvider>
    </NavigationContainer>
  );
}