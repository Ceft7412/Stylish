import './css/global.css';
import React, {useEffect} from 'react';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import BootSplash from 'react-native-bootsplash';
import {AuthProvider} from './context/AuthContext.tsx';
import RootNavigator from './navigation/RootNavigator.tsx';

export default function App() {
  useEffect(() => {
    const init = async () => {
      GoogleSignin.configure({
        webClientId:
          '73009182108-v3330daklkfjq0hhongqkbvfaenenug1.apps.googleusercontent.com',
      });
    };

    init().finally(async () => {
      await BootSplash.hide({fade: true});
    });
  }, []);

  return (
    <AuthProvider>
      <RootNavigator />
    </AuthProvider>
  );
}
