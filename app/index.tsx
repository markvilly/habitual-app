import { View, Text, ScrollView } from "react-native";
import React from "react";
import ProductCard from "@/components/productCard";

const IndexPage = () => {
  return (
    // <View className=" flex-1 justify-center items-center">
    //   <Text>Home page</Text>
    // </View>
    <>
      <ScrollView className=" relative px-8 ">
        <View className=" absolute w-[750px] h-[750px] top-[-325px] left-[-110px] rounded-full bg-[#FFE202]"></View>
        {/* Header Section */}
        <View className=" flex-row justify-between pt-32 pb-9">
          <View>
            <Text className=" text-lg font-extrabold text-gray-800">
              SUGGESTED FOR YOU
            </Text>
            <Text className=" font-semibold text-4xl text-gray-800">
              Find the stuff you love.
            </Text>
          </View>
          <View className="w-[45px] h-[45px] bg-black rounded-full "></View>
        </View>
        {/* Horizontal Scroll Section */}
        <ScrollView horizontal>
          <>
            {/* Container */}
            <View className=" relative w-[350px] h-[350px] bg-[#f8f7fa] rounded-lg shadow-slate-500">
              <View className=" p-6 w-[100%] h-[50%] bg-white absolute bottom-0">
                <Text className=" text-2xl text-gray-700">Bose Headphones</Text>
                <View className=" flex-row justify-between items-center ">
                  <Text className=" text-2xl text-gray-700 font-bold">
                    $265.99
                  </Text>
                  <View className=" bg-[#eaf8ec] rounded-md py-2 px-4">
                    <Text className=" text-[#51B960] font-bold text-xl">
                      10% OFF
                    </Text>
                  </View>
                </View>
                <Text className=" text-lg text-gray-400">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                </Text>
              </View>
            </View>
            {/* Card Footer */}
          </>
        </ScrollView>
      </ScrollView>
    </>
  );
};

export default IndexPage;
