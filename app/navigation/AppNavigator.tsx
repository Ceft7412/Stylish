import {View, Text} from 'react-native';
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import HomeScreen from '../screens/App/HomeScreen.tsx';

const StackApp = createStackNavigator();

export default function AppNavigator() {
  return (
    <StackApp.Navigator>
      <StackApp.Screen name="HomeScreen" component={HomeScreen} />
    </StackApp.Navigator>
  );
}
