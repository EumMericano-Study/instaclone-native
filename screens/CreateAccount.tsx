import React from "react";
import { TextInput } from "react-native";
import styled from "styled-components/native";

import AuthButton from "../components/auth/AuthButton";
import AuthLayout from "../components/auth/AuthLayout";

export default function CreateAccount() {
  return (
    <AuthLayout>
      <TextInput
        placeholder="First Name"
        placeholderTextColor="gray"
        returnKeyType="next"
        style={{ width: "100%", backgroundColor: "white" }}
      />
      <TextInput
        placeholder="Last Name"
        placeholderTextColor="gray"
        returnKeyType="next"
        style={{ width: "100%", backgroundColor: "white" }}
      />
      <TextInput
        placeholder="Username"
        placeholderTextColor="gray"
        returnKeyType="next"
        style={{ width: "100%", backgroundColor: "white" }}
      />
      <TextInput
        placeholder="Email"
        placeholderTextColor="gray"
        keyboardType="email-address"
        returnKeyType="next"
        style={{ width: "100%", backgroundColor: "white" }}
      />
      <TextInput
        placeholder="Password"
        placeholderTextColor="gray"
        secureTextEntry
        returnKeyType="done"
        style={{ width: "100%", backgroundColor: "white" }}
      />
      <AuthButton text="Create Account" disabled={true} onPress={() => null} />
    </AuthLayout>
  );
}
