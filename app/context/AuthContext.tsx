import React, {useEffect} from 'react';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import auth from '@react-native-firebase/auth';
import {getUserOnboardingStatus} from '../services/firestoreAuthServices.ts';

interface AuthContextType {
  user: any;
  setUser: (user: any) => void;
  onboarding: boolean;
  setOnboarding: (status: boolean) => void;
  signOut: () => void;
  setError: (error: string) => void;
  error: string;
}

const AuthContext = React.createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({children}: {children: React.ReactNode}) => {
  const [user, setUser] = React.useState<any>();
  const [onboarding, setOnboarding] = React.useState<boolean>(false);
  const [error, setError] = React.useState<string>('');
  console.log(user);

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(async user => {
      setUser(user);
      if (user) {
        const {success, onboardingComplete, error} =
          await getUserOnboardingStatus(user.uid);
        if (success) {
          setOnboarding(onboardingComplete);
        } else {
          setError(error);
        }
      }
    });
    return subscriber;
  }, []);

  const signOut = () => {
    setUser(null);
    GoogleSignin.revokeAccess();
    GoogleSignin.signOut();
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        onboarding,
        setOnboarding,
        signOut,
        error,
        setError,
      }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = React.useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
