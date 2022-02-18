import React, { useRef } from "react";
import { KeyboardAvoidingView, Platform, TextInput } from "react-native";
import styled from "styled-components/native";

import AuthButton from "../components/auth/AuthButton";
import AuthLayout from "../components/auth/AuthLayout";

export default function CreateAccount() {
  const lastNameRef = useRef<TextInput>(null);
  const usernameRef = useRef<TextInput>(null);
  const emailRef = useRef<TextInput>(null);
  const passwordRef = useRef<TextInput>(null);

  const onNext = (nextOne: React.RefObject<TextInput>) =>
    nextOne?.current?.focus();

  const onDone = () => {
    alert("done");
  };
  return (
    <AuthLayout>
      <KeyboardAvoidingView
        style={{
          width: "100%",
        }}
        behavior="padding"
        keyboardVerticalOffset={Platform.OS === "ios" ? 30 : 0}
      >
        <TextInput
          autoFocus
          placeholder="First Name"
          placeholderTextColor="gray"
          returnKeyType="next"
          style={{ width: "100%", backgroundColor: "white" }}
          onSubmitEditing={() => onNext(lastNameRef)}
        />
        <TextInput
          ref={lastNameRef}
          placeholder="Last Name"
          placeholderTextColor="gray"
          returnKeyType="next"
          style={{ width: "100%", backgroundColor: "white" }}
          onSubmitEditing={() => onNext(usernameRef)}
        />
        <TextInput
          ref={usernameRef}
          placeholder="Username"
          placeholderTextColor="gray"
          returnKeyType="next"
          style={{ width: "100%", backgroundColor: "white" }}
          onSubmitEditing={() => onNext(emailRef)}
        />
        <TextInput
          ref={emailRef}
          placeholder="Email"
          placeholderTextColor="gray"
          keyboardType="email-address"
          returnKeyType="next"
          style={{ width: "100%", backgroundColor: "white" }}
          onSubmitEditing={() => onNext(passwordRef)}
        />
        <TextInput
          ref={passwordRef}
          placeholder="Password"
          placeholderTextColor="gray"
          secureTextEntry
          returnKeyType="done"
          style={{ width: "100%", backgroundColor: "white" }}
          onSubmitEditing={onDone}
        />
        <AuthButton
          text="Create Account"
          disabled={true}
          onPress={() => null}
        />
      </KeyboardAvoidingView>
    </AuthLayout>
  );
}
