import {
  Text,
  SafeAreaView,
  Image,
  View,
  TouchableWithoutFeedback,
} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {useAuth} from '../context/AuthContext.tsx';
import {setOnboardingStatus} from '../services/firestoreAuthServices.ts';

export default function OnboardingScreen({navigation}: {navigation: any}) {
  const {setOnboarding, user} = useAuth();

  const updateOnboarding = () => {
    setOnboarding(true);
    setOnboardingStatus(user.uid, true);
  };
  return (
    <SafeAreaView className="h-full w-full flex relative">
      <Image
        className="absolute bg-contain w-full h-full"
        source={require('../../assets/images/get_started.png')}
      />

      <View className="h-full flex gap-5 items-center justify-end ">
        <LinearGradient
          className="p-[34px] flex items-center w-full"
          colors={['rgba(0, 0, 0, 0)', 'rgba(0, 0, 0, 10)']}>
          <Text className="text-white text-center text-[40px] font-semibold">
            You want Authentic, here you go!
          </Text>
          <Text className="text-white text-[20px] font-light">
            Find it here, buy now!
          </Text>
          <TouchableWithoutFeedback onPress={updateOnboarding}>
            <View className="bg-[#F83758] h-16 rounded-xl flex w-full justify-center mt-20 items-center">
              <Text className="text-white text-[20px]">Get Started</Text>
            </View>
          </TouchableWithoutFeedback>
        </LinearGradient>
      </View>
    </SafeAreaView>
  );
}
