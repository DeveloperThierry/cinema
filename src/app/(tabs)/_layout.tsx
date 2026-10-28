import { Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";
const TabLayout = () => {
  return (
    <Tabs
      screenOptions={{
        tabBarItemStyle: {
          paddingTop: 10,
          flex:1
        },
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: "#e0dfd5",
          borderRadius: 20,
          position: "absolute",
          height: 60,
          marginBottom: 60,
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          paddingTop: 10,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          headerShown: false,
          tabBarIcon: ({ focused, color }) => (
            <Ionicons
              name={focused ? "home" : "home-outline"}
              size={24}
              color={focused ? "#183a37" : ""}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="search"
        options={{
          title: "Search",
          headerShown: false,
          tabBarIcon: ({ focused, color }) => (
            <Ionicons
              name={focused ? "search" : "search-outline"}
              size={24}
              color={focused ? "#183a37" : ""}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="saved"
        options={{
          title: "Saved",
          headerShown: false,
          tabBarIcon: ({ focused, color }) => (
            <Ionicons
              name={focused ? "bookmark" : "bookmark-outline"}
              size={24}
              color={focused ? "#183a37" : ""}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          headerShown: false,
          tabBarIcon: ({ focused, color }) => (
            <Ionicons
              name={focused ? "people" : "people-outline"}
              size={24}
              color={focused ? "#183a37" : ""}
            />
          ),
        }}
      />
    </Tabs>
  );
};

export default TabLayout;
