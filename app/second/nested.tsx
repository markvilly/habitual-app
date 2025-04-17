import { View, Text, Button } from "react-native";
import React from "react";
import { Link } from "expo-router";

const Second = () => {
  return (
    <View className=" flex-1 justify-center items-center">
      <Text>Second</Text>
      <Link href="/second/also-nested" push asChild>
        <Button title="Push to /second/also-nested" />
      </Link>
    </View>
  );
};

export default Second;
