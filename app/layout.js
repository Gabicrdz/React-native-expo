import React from 'react';
import { Stack } from 'expo-router';

export default function RootLayout() {
  return (
    <Stack
      initialRouteName="index"
      screenOptions={{
        headerShown: false, 
      }}
    />
  );
}