import { ClerkProvider } from "@clerk/clerk-expo";
// import * as SecureStore from "expo-secure-store";
import { tokenCache } from '@clerk/clerk-expo/token-cache';
import { StatusBar } from "expo-status-bar";
import React from "react";
import RootNavigator from "./navigation/RootNavigator";
// const tokenCache = {
//   async getToken(key) {
//     try {
//       return SecureStore.getItemAsync(key);
//     } catch (err) {
//       return null;
//     }
//   },
//   async saveToken(key, value) {
//     try {
//       return SecureStore.setItemAsync(key, value);
//     } catch (err) {
//       return;
//     }
//   },
// };

export default function App() {
  return (
    <ClerkProvider
      publishableKey={process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY}
      tokenCache={tokenCache}
    >
      <StatusBar style="light" />
      <RootNavigator />
    </ClerkProvider>
  );
}
