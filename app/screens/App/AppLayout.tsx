import {View, Text, SafeAreaView} from 'react-native';
import React from 'react';

export default function AppLayout({children}: {children: React.ReactNode}) {
  return <SafeAreaView>{children}</SafeAreaView>;
}
