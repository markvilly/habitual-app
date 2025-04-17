import { View, Text, Button } from "react-native";
import React from "react";
import { Link } from "expo-router";

const Fifth = () => {
  return (
    <View className="flex-1 justify-center items-center">
      <Text>Cart + Checkout</Text>
      <Link href="/fifth/proceed" push asChild>
        <Button title="Checkout" />
      </Link>
    </View>
  );
};

export default Fifth;
