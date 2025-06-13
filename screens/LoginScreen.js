import { View, Text } from 'react-native'
import React from 'react'
import useAuth from '../hooks/useAuth'

const LoginScreen = () => {
  const { user } = useAuth(); // Able to access from useAuth hook (HOC - View App.js)
  
  console.log(user);
  return (
    <View>
      <Text>Login to the app</Text>
    </View>
  )
}

export default LoginScreen