import {View, Text} from 'react-native';
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import HomeScreen from '../screens/App/HomeScreen.tsx';
import {useAuth} from '../context/AuthContext.tsx';
import OnboardingScreen from '../screens/OnboardingScreen.tsx';
import AppLayout from '../screens/App/AppLayout.tsx';
import OnboardingLayout from '../screens/App/OnboardingLayout.tsx';

const StackApp = createStackNavigator();
const TabsApp = createBottomTabNavigator();

const TabBarArray = [
  {
    name: 'Home',
    route: 'HomeScreen',
  },
];
export default function AppNavigator() {
  const {onboarding, user} = useAuth();
  if (onboarding === null) {
    <View>
      <Text>Loading..</Text>
    </View>;
  }
  return (
    <>
      {!onboarding ? (
        <StackApp.Navigator
          screenOptions={{
            headerShown: false,
          }}>
          <StackApp.Screen name="OnboardingScreen">
            {props => (
              <OnboardingLayout>
                <OnboardingScreen {...props} />
              </OnboardingLayout>
            )}
          </StackApp.Screen>
        </StackApp.Navigator>
      ) : (
        <TabsApp.Navigator
          screenOptions={{
            headerShown: false,
            tabBarStyle: {
              backgroundColor: 'white',
              borderTopWidth: 0.5,
              elevation: 0,
              borderColor: 'rgba(0,0,0,0.2)',
              height: 70,
            },
            tabBarLabelStyle: {
              fontSize: 16,
              fontWeight: 'semibold',
            },
          }}>
          <TabsApp.Screen name="HomeScreen">
            {props => (
              <AppLayout>
                <HomeScreen {...props} />
              </AppLayout>
            )}
          </TabsApp.Screen>
        </TabsApp.Navigator>
      )}
    </>
  );
}
