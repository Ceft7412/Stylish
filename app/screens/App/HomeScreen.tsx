import {View, Text, Button, TouchableOpacity} from 'react-native';
import React from 'react';
import {useAuth} from '../../context/AuthContext.tsx';

export default function HomeScreen({navigation}: {navigation: any}) {
  const {user, signOut} = useAuth();

  return (
    <View>
      <Text>HomeScreen</Text>
      <Text>Welcome, {user?.displayName}</Text>
      <TouchableOpacity onPress={() => navigation.navigate('OnboardingScreen')}>
        <Text>Profile</Text>
      </TouchableOpacity>
      <Button title="Log Out" onPress={signOut} />
    </View>
  );
}
