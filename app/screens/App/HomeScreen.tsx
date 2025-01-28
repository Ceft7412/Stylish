import {View, Text, Button} from 'react-native';
import React from 'react';
import {useAuth} from '../../context/AuthContext.tsx';

export default function HomeScreen() {
  const {user, signOut} = useAuth();

  return (
    <View>
      <Text>HomeScreen</Text>
      <Text>Welcome, {user?.name}</Text>
      <Button title="Log Out" onPress={signOut} />
    </View>
  );
}
