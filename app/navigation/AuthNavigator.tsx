import {View, Text} from 'react-native';
import React, {useEffect} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import AuthLayout from '../screens/Auth/AuthLayout.tsx';

// Auth specific screens
import LoginScreen from '../screens/Auth/LoginScreen.tsx';
import SignupScreen from '../screens/Auth/SignupScreen.tsx';

const StackAuth = createStackNavigator();
export default function AuthNavigator() {
  return (
    <StackAuth.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <StackAuth.Screen name="LoginScreen">
        {props => (
          <AuthLayout>
            <LoginScreen {...props} />
          </AuthLayout>
        )}
      </StackAuth.Screen>
      <StackAuth.Screen name="SignupScreen">
        {props => (
          <AuthLayout>
            <SignupScreen {...props} />
          </AuthLayout>
        )}
      </StackAuth.Screen>
    </StackAuth.Navigator>
  );
}
