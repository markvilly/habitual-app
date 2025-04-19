import { View, Text, Image } from "react-native";
import { images } from "@/constants/images";
import React from "react";
import FontAwesome from "@expo/vector-icons/FontAwesome";

const ProductCard = () => {
  return (
    <>
      {/* Container */}
      <View className=" relative  w-[350px] h-[370px] bg-[#f8f7fa] rounded-lg shadow-slate-500 ">
        <View className=" w-full flex-row justify-center items-center pt-6">
          <Image className=" " source={images.headphones} />
        </View>
        <View className="  p-6 w-[100%] h-[60%] bg-white absolute bottom-[-30px] rounded-b-lg">
          <Text className=" text-2xl text-gray-700">Bose Headphones</Text>
          <View className=" flex-row justify-between items-center pb-2">
            <Text className=" text-2xl text-gray-700 font-bold">$265.99</Text>
            <View className=" bg-[#eaf8ec] rounded-3xl py-1 px-4">
              <Text className=" text-[#51B960] font-bold text-md">10% OFF</Text>
            </View>
          </View>
          <Text className=" text-lg text-gray-400">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          </Text>
          <View className=" pt-2 w-[100%] flex-row  items-center justify-between">
            <View className=" flex-row items-center ">
              <FontAwesome name="star" size={16} color="#FFE202" />
              <Text className=" font-bold text-lg ml-1">5.0</Text>
              <Text className=" ml-3 font-semibold text-lg">Category</Text>
            </View>
            <View className=" bg-[#ECF6FF] rounded-3xl py-1 px-4">
              <Text className=" text-[#5FA1D5] font-bold text-md">
                STAFF PICK
              </Text>
            </View>
          </View>
        </View>
      </View>
      {/* Card Footer */}
    </>
  );
};

export default ProductCard;
