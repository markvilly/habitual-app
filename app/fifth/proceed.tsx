import { View, Text, Button } from "react-native";
import React from "react";
import { Link } from "expo-router";

const proceed = () => {
  return (
    <View className="flex-1 justify-center items-center">
      <Text>Checkout Page</Text>
      <Link href="/fifth/success" push asChild>
        <Button title="Pay now" />
      </Link>
    </View>
  );
};

export default proceed;
