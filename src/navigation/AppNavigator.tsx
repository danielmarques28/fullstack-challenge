import React from 'react';
import { HomeStack } from './stacks';
import { createStackNavigator } from '@react-navigation/stack';
import { BookDetails } from 'src/pages';

export type TabNavigatorParamList = {
  HomeStack: undefined;
  BookDetails: { id: number };
};

const Stack = createStackNavigator<TabNavigatorParamList>();

export const AppNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="HomeStack"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="HomeStack" component={HomeStack} />
      <Stack.Screen name="BookDetails" component={BookDetails} />
    </Stack.Navigator>
  );
};
