import { View, Text } from "react-native";
import React from "react";
import { Stack } from "expo-router";

const Layout = () => {
  return (
    <Stack>
      <Stack.Screen name="wishlist" />
      <Stack.Screen name="nested" />
      <Stack.Screen name="also-nested" />
    </Stack>
  );
};

export default Layout;
