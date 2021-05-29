import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { AddBook } from 'src/pages';

export type AddBookStackParamList = {
  AddBook: undefined;
};

const Stack = createStackNavigator<AddBookStackParamList>();

export const AddBookStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName="AddBook"
    >
      <Stack.Screen name="AddBook" component={AddBook} />
    </Stack.Navigator>
  );
};
