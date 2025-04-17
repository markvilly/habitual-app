import { View, Text, ScrollView } from "react-native";
import React from "react";

const IndexPage = () => {
  return (
    // <View className=" flex-1 justify-center items-center">
    //   <Text>Home page</Text>
    // </View>
    <>
      <ScrollView className=" relative px-8">
        <View className=" absolute w-[750px] h-[750px] top-[-325px] left-[-110px] rounded-full bg-yellow-300"></View>
        <View className=" flex-row justify-between py-20">
          <View>
            <Text className=" text-lg font-bold text-gray-800">
              SUGGESTED FOR YOU
            </Text>
            <Text className=" font-semibold text-3xl text-gray-800">
              Find the stuff you love.
            </Text>
          </View>
          <View className="w-[45px] h-[45px] bg-black rounded-full "></View>
        </View>
      </ScrollView>
    </>
  );
};

export default IndexPage;
