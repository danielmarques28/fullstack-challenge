import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HomeStack, AddBookStack } from './stacks';

export type TabNavigatorParamList = {
  HomeStack: undefined;
  AddBookStack: undefined;
};

const Tab = createBottomTabNavigator<TabNavigatorParamList>();

export const AppNavigator = () => {
  return (
    <Tab.Navigator initialRouteName="HomeStack">
      <Tab.Screen name="HomeStack" component={HomeStack} />
      <Tab.Screen name="AddBookStack" component={AddBookStack} />
    </Tab.Navigator>
  );
};
