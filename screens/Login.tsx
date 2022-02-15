import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Props } from "../types";

export default function LogIn({ navigation }: Props) {
  return (
    <View>
      <Text>LogIn</Text>
      <TouchableOpacity onPress={() => navigation.navigate("CreateAccount")}>
        <Text>Go to Create Account </Text>
      </TouchableOpacity>
    </View>
  );
}
