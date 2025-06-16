import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import HomeScreen from './screens/HomeScreen';
import ChatScreen from './screens/ChatScreen';
import LoginScreen from './screens/LoginScreen';
import useAuth from './hooks/useAuth';

// Import stack navigator, view https://reactnavigation.org/docs/hello-react-navigation?config=dynamic for docs on navigation
const Stack = createNativeStackNavigator();

/* 
  StackNavigator.js
  This file sets up a stack navigator for the app.
  Import all screens from screens folder
*/
const StackNavigator = () => {
  const { user } = useAuth(); // Use the useAuth hook to get the user state
  return (
    <Stack.Navigator>
      {user ? (
        <>
          <Stack.Screen name='Home' component={HomeScreen} />
          <Stack.Screen name='Chat' component={ChatScreen} />
        </>
      ) : (
        <Stack.Screen name='Login' component={LoginScreen} />
      )}
    </Stack.Navigator>
  );
};

export default StackNavigator;