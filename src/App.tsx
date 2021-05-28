import 'react-native-gesture-handler';
import React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { AppNavigator } from './navigation/AppNavigator';

export const App = () => {
  return (
    <NavigationContainer>
      <StatusBar />
      <AppNavigator />
    </NavigationContainer>
  );
};
