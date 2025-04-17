import { View, Text, Button } from "react-native";
import React from "react";
import { Link, Stack } from "expo-router";

const _layout = () => {
  return (
    <Stack>
      <Stack.Screen name="index" />
      <Stack.Screen name="proceed" />
      <Stack.Screen name="success" />
    </Stack>
  );
};

export default _layout;
