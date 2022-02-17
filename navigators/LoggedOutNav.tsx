import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Welcome from "../screens/Welcome";
import LogIn from "../screens/LogIn";
import CreateAccount from "../screens/CreateAccount";

const Stack = createNativeStackNavigator();

export default function LoggedOutNav() {
  return (
    <Stack.Navigator
      screenOptions={{ headerBackTitleVisible: false, headerTintColor: "gray" }}
    >
      <Stack.Screen
        name="Welcome"
        options={{ headerShown: false }}
        component={Welcome}
      />
      <Stack.Screen
        name="LogIn"
        options={{
          title: "Log In",
        }}
        component={LogIn}
      />
      <Stack.Screen
        name="CreateAccount"
        options={{
          headerTitle: () => false,
          headerTransparent: true,
          headerTintColor: "white",
        }}
        component={CreateAccount}
      />
    </Stack.Navigator>
  );
}
