import { Tabs } from "expo-router";

export default function TabLayour() {
  return (
    <Tabs
      screenOptions={{
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
          title: "home",
        }}
      />
      <Tabs.Screen
        name="search"
        options={{
          title: "Search",
          //   headerShown: false,
        }}
      />
    </Tabs>
  );
}
