import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import AuthNavigation from './AuthNavigation';

const RootNavigations = () => {
  return (
   <NavigationContainer>
    <AuthNavigation/>
   </NavigationContainer>
  )
}

export default RootNavigations