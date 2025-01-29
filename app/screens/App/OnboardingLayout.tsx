import {View, Text, SafeAreaView} from 'react-native';
import React from 'react';

export default function OnboardingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <SafeAreaView>{children}</SafeAreaView>;
}
