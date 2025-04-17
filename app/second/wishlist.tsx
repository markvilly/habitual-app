import { View, Text, Button } from "react-native";
import React from "react";
import { Link } from "expo-router";

const Second = () => {
  return (
    <View className=" flex-1 justify-center items-center">
      <Text>Wishlist Page</Text>
      <Link href="/second/nested" push asChild>
        <Button title="Push to /second/nested" />
      </Link>
    </View>
  );
};

export default Second;
