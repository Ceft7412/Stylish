import {View, Text, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import {useAuth} from '../context/AuthContext.tsx';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import {getUserOnboardingStatus} from '../services/firestoreAuthServices.ts';

export default function SocialAuths() {
  const {user, setUser, onboarding, setOnboarding, setError} = useAuth();

  const handleSignin = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const result = await GoogleSignin.signIn();
      console.log('Hello', result);
      // Try the new style of google-sign in result, from v13+ of that module
      let idToken = result.data?.idToken;
      if (!idToken) {
        throw new Error('No ID token found');
      }
      // Create a Google credential with the token
      const googleCredential = auth.GoogleAuthProvider.credential(
        result.data?.idToken!,
      );
      // Google Credential
      console.log('googleCredential: ', googleCredential);

      const userCredential = await auth().signInWithCredential(
        googleCredential,
      );
      const user = userCredential.user;

      console.log('hanldesigninuser: ', user);
      const userDoc = await firestore()
        .collection('users')
        .doc(user?.uid)
        .get();
      console.log('userDoc', userDoc);
      console.log('uid', user?.uid);
      if (!userDoc.exists) {
        await firestore().collection('users').doc(user?.uid).set({
          name: user?.displayName,
          email: user?.email,
          photoURL: user?.photoURL,
          onBoarded: false,
        });
      }
      if (user) {
        const {success, onboardingComplete, error} =
          await getUserOnboardingStatus(user.uid);
        if (success) {
          setOnboarding(onboardingComplete);
        } else {
          setError(error);
        }
      }
      setUser(user);
    } catch (er: any) {
      setError(er.message);
    }
  };

  return (
    <View className="mt-24 flex flex-col">
      <View className="relative flex items-center justify-center">
        <View className="h-[1px] w-full bg-gray-100" />
        <View className="absolute bg-white">
          <Text className="text-[#575757]">Or continue with</Text>
        </View>
      </View>
      <View className="flex flex-row gap-5 mt-20 flex items-center justify-center">
        <TouchableOpacity
          className="bg-[#FCF3F6] p-6 rounded-full border-[#F83758] border"
          onPress={handleSignin}>
          <Image
            resizeMode="contain"
            source={require('../../assets/icons/google-icon.png')}
          />
        </TouchableOpacity>
        <TouchableOpacity className="bg-[#FCF3F6] p-6 rounded-full border-[#F83758] border">
          <Image
            resizeMode="contain"
            source={require('../../assets/icons/facebook-icon.png')}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}
