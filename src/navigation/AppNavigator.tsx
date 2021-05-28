import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Home } from 'src/pages';

const Stack = createStackNavigator();

export const AppNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  );
};
