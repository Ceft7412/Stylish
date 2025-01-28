import {
  View,
  Text,
  TouchableHighlight,
  TextInput,
  Image,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import SocialAuths from '../../components/SocialAuths.tsx';
import SignupScreen from './SignupScreen.tsx';
import PasswordInput from '../../components/PasswordInput.tsx';

export default function LoginScreen({navigation}: {navigation: any}) {
  const [password, setPassword] = useState<string>('');

  return (
    <>
      <Text className="text-6xl font-bold pt-6">Welcome Back!</Text>
      <View className="flex flex-col gap-10 pt-12 ">
        <View className="relative rounded-xl flex justify-center bg-[#F3F3F3]">
          <Image
            source={require('../../../assets/icons/user-icon.png')}
            className="absolute left-3"
          />
          <TextInput
            className="border rounded-xl h-16 p-2 pl-12 border-[#A8A8A9] font-[12px] "
            placeholder="Username or email"
          />
        </View>
        <PasswordInput
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
        />
      </View>
      <Text className="text-right pt-2 text-[#F83758]">Forgot Password?</Text>
      <TouchableHighlight
        className="bg-[#F83758] h-16 rounded-xl flex justify-center mt-20 items-center"
        onPress={{}}>
        <Text className="text-white text-[20px]">Login</Text>
      </TouchableHighlight>
      <SocialAuths />
      <View className="mt-10 flex items-center">
        <Text>Don't have an account?</Text>
        <TouchableOpacity onPress={() => navigation.navigate('SignupScreen')}>
          <Text className="text-[#F83758] font-semibold">Sign up</Text>
        </TouchableOpacity>
      </View>
    </>
  );
}
