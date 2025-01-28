import {View, Text, Image, TextInput, TouchableHighlight} from 'react-native';
import React, {useState} from 'react';
import {valueOf} from 'tailwindcss';

type PasswordInputProps = {
  placeholder: string;
  value: string;
  onChangeText: (text: string) => void;
};
export default function PasswordInput({
  placeholder,
  value,
  onChangeText,
}: PasswordInputProps) {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  return (
    <View className="relative rounded-xl flex justify-center bg-[#F3F3F3]">
      <Image
        source={require('../../assets/icons/lock-icon.png')}
        className="absolute left-3"
      />
      <TextInput
        className="border rounded-xl h-16 p-2 pl-12 pr-14 border-[#A8A8A9] font-[12px]"
        secureTextEntry={!showPassword}
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
      />
      <TouchableHighlight
        onPress={togglePasswordVisibility}
        underlayColor="transparent"
        className="absolute right-5">
        <Image source={require('../../assets/icons/eye-icon.png')} />
      </TouchableHighlight>
    </View>
  );
}
