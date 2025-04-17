import { icons } from "@/constants/icons";
import { Tabs } from "expo-router";
import React from "react";
import { StatusBar, Image } from "react-native";
import Feather from "@expo/vector-icons/Feather";

export default function TabLayour() {
  return (
    <React.Fragment>
      <StatusBar />
      <Tabs
        screenOptions={{
          tabBarShowLabel: false,
          tabBarActiveTintColor: "#3a3a3a",
          tabBarItemStyle: {
            width: "100%",
            height: "100%",
            justifyContent: "center",
            alignItems: "center",
          },
        }}
      >
        <Tabs.Screen
          name="home"
          options={{
            tabBarIcon: ({ color, size }) => (
              <>
                <Feather name="home" size={size} color={color} />
              </>
            ),
          }}
        />
        <Tabs.Screen
          name="wishlist"
          options={{
            tabBarIcon: ({ color, size }) => (
              <>
                <Feather name="heart" size={size} color={color} />
              </>
            ),
          }}
        />
        <Tabs.Screen
          options={{
            tabBarIcon: ({ color, size }) => (
              <>
                <Feather name="search" size={size} color={color} />
              </>
            ),
          }}
          name="search"
        />
        <Tabs.Screen
          options={{
            tabBarIcon: ({ color, size }) => (
              <>
                <Feather name="tag" size={size} color={color} />
              </>
            ),
          }}
          name="orders"
        />
        <Tabs.Screen
          options={{
            tabBarIcon: ({ color, size }) => (
              <>
                <Feather name="shopping-bag" size={size} color={color} />
              </>
            ),
          }}
          name="checkout"
        />
      </Tabs>
    </React.Fragment>
  );
}
