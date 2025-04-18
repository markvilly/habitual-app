import "@/app/global.css";
import React from "react";
import { StatusBar } from "expo-status-bar";
import { Stack, Tabs } from "expo-router";
import Feather from "@expo/vector-icons/Feather";
export default function RootLayout() {
  return (
    <React.Fragment>
      {/* <StatusBar style="auto" /> */}
      <Tabs
        screenOptions={{
          tabBarShowLabel: false,
          tabBarActiveTintColor: "#3a3a3a",
          headerShown: false,
          tabBarItemStyle: {
            width: "100%",
            height: "100%",
            justifyContent: "center",
            alignItems: "center",
          },
          tabBarStyle: {
            marginHorizontal: 12,
            marginVertical: 24,
            height: 60,
            borderWidth: 0,
          },
        }}
      >
        <Tabs.Screen
          options={{
            tabBarIcon: ({ color, size }) => (
              <Feather size={size} color={color} name="home" />
            ),
          }}
          name="index"
        />
        <Tabs.Screen
          options={{
            headerShown: false,
            popToTopOnBlur: true,
            tabBarIcon: ({ color, size }) => (
              <Feather size={size} color={color} name="heart" />
            ),
          }}
          name="second"
        />
        <Tabs.Screen
          options={{
            tabBarIcon: ({ color, size }) => (
              <Feather size={size} color="#3a3a3a" name="search" />
            ),
          }}
          name="search"
        />
        <Tabs.Screen
          options={{
            tabBarIcon: ({ color, size }) => (
              <Feather size={size} color={color} name="tag" />
            ),
          }}
          name="orders"
        />
        <Tabs.Screen
          options={{
            tabBarBadge: 3,
            headerShown: false,
            popToTopOnBlur: true,
            tabBarIcon: ({ color, size }) => (
              <Feather size={size} color={color} name="shopping-bag" />
            ),
          }}
          name="fifth"
        />
      </Tabs>
    </React.Fragment>
  );
}
