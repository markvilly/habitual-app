import { View, Text, Button } from "react-native";
import React from "react";
import { Link } from "expo-router";

const success = () => {
  return (
    <View className=" flex-1 justify-center items-center">
      <Text>success!</Text>
      <Link href="/" asChild push>
        <Button title="Continue" />
      </Link>
    </View>
  );
};

export default success;
