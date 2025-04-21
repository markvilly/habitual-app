import { View, Text, Image, ScrollView, FlatList } from "react-native";
import React from "react";
import ProductCard from "@/components/productCard";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { images } from "@/constants/images";

const IndexPage = () => {
  return (
    // <View className=" flex-1 justify-center items-center">
    //   <Text>Home page</Text>
    // </View>
    <>
      <ScrollView className=" relative ">
        <View className="px-8">
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
        </View>
        {/* Horizontal Scroll Section */}
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{
            gap: 18,
            paddingLeft: 26,
            paddingRight: 32,
            overflowX: "visible",
          }}
          className=" mt-[2px] "
        >
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </ScrollView>
      </ScrollView>
    </>
  );
};

export default IndexPage;
