import React from 'react';
import { AddBook, Home } from 'src/pages';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { BottomBar } from 'src/components';
import { TabNavigatorParamList } from '../AppNavigator';

export type HomeStackParamList = {
  Home: undefined;
  AddBook: undefined;
} & Pick<TabNavigatorParamList, 'BookDetails'>;

const Tab = createBottomTabNavigator<HomeStackParamList>();

export const HomeStack = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      tabBarOptions={{ keyboardHidesTabBar: true }}
      tabBar={(props) => <BottomBar {...props} />}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="AddBook" component={AddBook} />
    </Tab.Navigator>
  );
};
