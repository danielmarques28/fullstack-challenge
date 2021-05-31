import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Home, Details } from 'src/pages';

export type HomeStackParamList = {
  Home: undefined;
  Details: { id: number };
};

const Stack = createStackNavigator<HomeStackParamList>();

export const HomeStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName="Home"
    >
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Details" component={Details} />
    </Stack.Navigator>
  );
};
