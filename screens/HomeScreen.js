import { View, Text, Button } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const HomeScreen = () => {
  const navigation = useNavigation(); // Router - gives access to navigation prop (call on line 11)

  return (
    <View>
      <Text>I am the homescreen</Text>
      <Button title="Go to chat screen" onPress={() => navigation.navigate('Chat')} />
    </View>
  )
}

export default HomeScreen