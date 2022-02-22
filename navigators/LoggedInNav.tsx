import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { Ionicons } from "@expo/vector-icons";

import Feed from "../screens/Feed";
import Notification from "../screens/Notification";
import Profile from "../screens/Profile";
import Search from "../screens/Search";

const Tabs = createBottomTabNavigator();

export default function LoggedInNav() {
  return (
    <Tabs.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: "white",
        tabBarShowLabel: false,
        tabBarStyle: {
          borderTopColor: "rgba(255,255,255,0.2)",
          backgroundColor: "black",
        },
      }}
    >
      <Tabs.Screen
        name="Feed"
        component={Feed}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <Ionicons name="home" color={color} size={focused ? 24 : 22} />
          ),
        }}
      />
      <Tabs.Screen
        name="Search"
        component={Search}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <Ionicons name="search" color={color} size={focused ? 24 : 22} />
          ),
        }}
      />
      <Tabs.Screen
        name="Notification"
        component={Notification}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <Ionicons
              name="heart-outline"
              color={color}
              size={focused ? 24 : 22}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <Ionicons name="person" color={color} size={focused ? 24 : 22} />
          ),
        }}
      />
    </Tabs.Navigator>
  );
}
