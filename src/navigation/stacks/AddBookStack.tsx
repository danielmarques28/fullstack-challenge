import React from 'react';
import { AddBook } from 'src/pages';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { BottomBar } from 'src/components';

export type AddBookStackParamList = {
  AddBook: undefined;
};

const Tab = createBottomTabNavigator<AddBookStackParamList>();

export const AddBookStack = () => {
  return (
    <Tab.Navigator
      initialRouteName="AddBook"
      tabBarOptions={{ keyboardHidesTabBar: true }}
      tabBar={(props) => <BottomBar {...props} />}
    >
      <Tab.Screen name="AddBook" component={AddBook} />
    </Tab.Navigator>
  );
};
