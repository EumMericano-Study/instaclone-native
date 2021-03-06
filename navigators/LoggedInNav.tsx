import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Feed from "../screens/Feed";
import Notification from "../screens/Notification";
import Profile from "../screens/Profile";
import Search from "../screens/Search";
import TabIcon from "../components/nav/TabIcon";

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
            <TabIcon iconName="home" color={color} focused={focused} />
          ),
        }}
      />
      <Tabs.Screen
        name="Search"
        component={Search}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <TabIcon iconName="search" color={color} focused={focused} />
          ),
        }}
      />
      <Tabs.Screen
        name="Camera"
        component={Search}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <TabIcon iconName="camera" color={color} focused={focused} />
          ),
        }}
      />
      <Tabs.Screen
        name="Notification"
        component={Notification}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <TabIcon iconName="heart" color={color} focused={focused} />
          ),
        }}
      />
      <Tabs.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <TabIcon iconName="person" color={color} focused={focused} />
          ),
        }}
      />
    </Tabs.Navigator>
  );
}
