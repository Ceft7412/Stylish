import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {useAuth} from '../context/AuthContext.tsx';
import AuthNavigator from './AuthNavigator.tsx';
import AppNavigator from './AppNavigator.tsx';

export default function RootNavigator() {
  const {user} = useAuth();

  return (
    <NavigationContainer>
      {user ? <AppNavigator /> : <AuthNavigator />}
    </NavigationContainer>
  );
}
