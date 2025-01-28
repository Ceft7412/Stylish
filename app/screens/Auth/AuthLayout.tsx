import {Animated, SafeAreaView, ScrollView, View} from 'react-native';
import React from 'react';

export default function AuthLayout({children}: {children: React.ReactNode}) {
  return (
    <SafeAreaView className="h-full bg-[#FFFFFF]">
      <ScrollView className="flex flex-col m-4 h-full ">{children}</ScrollView>
    </SafeAreaView>
  );
}
