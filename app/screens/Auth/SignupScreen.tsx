import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  TouchableHighlight,
} from 'react-native';
import React, {useState} from 'react';
import PasswordInput from '../../components/PasswordInput.tsx';
import SocialAuths from '../../components/SocialAuths.tsx';

export default function SignupScreen({navigation}: {navigation: any}) {
  const [password, setPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');
  return (
    <>
      <Text className="text-6xl font-bold pt-6">Create an account</Text>
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
        <PasswordInput
          placeholder="Confirm Password"
          value={confirmPassword}
          onChangeText={setConfirmPassword}
        />
      </View>
      <View className="text-left pt-2">
        <Text>
          By clicking the Register button, you agree to the{' '}
          <Text className="text-[#F83758]">terms and conditions.</Text>
        </Text>
      </View>
      <TouchableHighlight
        className="bg-[#F83758] h-16 rounded-xl flex justify-center mt-20 items-center"
        onPress={{}}>
        <Text className="text-white text-[20px]">Create Account</Text>
      </TouchableHighlight>
      <SocialAuths />
    </>
  );
}
