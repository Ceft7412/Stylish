import React from 'react';
import {GoogleSignin} from '@react-native-google-signin/google-signin';

const AuthContext = React.createContext();

export const AuthProvider = ({children}: {children: React.ReactNode}) => {
  const [user, setUser] = React.useState(null);
  console.log(user);
  const signIn = (userData: any) => {
    setUser(userData);
  };

  const signOut = () => {
    setUser(null);
    GoogleSignin.revokeAccess();
    GoogleSignin.signOut();
  };

  return (
    <AuthContext.Provider value={{user, signIn, signOut}}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return React.useContext(AuthContext);
};
