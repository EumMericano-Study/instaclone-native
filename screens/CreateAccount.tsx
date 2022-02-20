import React, { useEffect, useRef } from "react";
import { useForm } from "react-hook-form";
import { TextInput } from "react-native";

import AuthButton from "../components/auth/AuthButton";
import AuthLayout from "../components/auth/AuthLayout";
import { StyledTextInput } from "../components/auth/AuthShared";

export default function CreateAccount() {
  const { register, handleSubmit, setValue } = useForm();
  const lastNameRef = useRef<TextInput>(null);
  const usernameRef = useRef<TextInput>(null);
  const emailRef = useRef<TextInput>(null);
  const passwordRef = useRef<TextInput>(null);

  const onNext = (nextOne: React.RefObject<TextInput>) =>
    nextOne?.current?.focus();

  const onValid = (data: { [x: string]: string }) => {
    console.log(data);
  };

  useEffect(() => {
    register("firstname", {
      required: true,
    });
    register("lastname", {
      required: true,
    });
    register("username", {
      required: true,
    });
    register("email", {
      required: true,
    });
    register("password", {
      required: true,
    });
  }, [register]);

  return (
    <AuthLayout>
      <StyledTextInput
        autoFocus
        placeholder="First Name"
        placeholderTextColor="rgba(255,255,255,0.8)"
        returnKeyType="next"
        onSubmitEditing={() => onNext(lastNameRef)}
        onChangeText={(text: string) => setValue("firstname", text)}
      />
      <StyledTextInput
        ref={lastNameRef}
        placeholder="Last Name"
        placeholderTextColor="rgba(255,255,255,0.8)"
        returnKeyType="next"
        onSubmitEditing={() => onNext(usernameRef)}
        onChangeText={(text: string) => setValue("lastname", text)}
      />
      <StyledTextInput
        ref={usernameRef}
        placeholder="Username"
        placeholderTextColor="rgba(255,255,255,0.8)"
        returnKeyType="next"
        onSubmitEditing={() => onNext(emailRef)}
        onChangeText={(text: string) => setValue("username", text)}
      />
      <StyledTextInput
        ref={emailRef}
        placeholder="Email"
        placeholderTextColor="rgba(255,255,255,0.8)"
        keyboardType="email-address"
        returnKeyType="next"
        onSubmitEditing={() => onNext(passwordRef)}
        onChangeText={(text: string) => setValue("email", text)}
      />
      <StyledTextInput
        ref={passwordRef}
        placeholder="Password"
        placeholderTextColor="rgba(255,255,255,0.8)"
        secureTextEntry
        returnKeyType="done"
        lastOne={true}
        onSubmitEditing={handleSubmit(onValid)}
        onChangeText={(text: string) => setValue("password", text)}
      />
      <AuthButton
        text="Create Account"
        disabled={true}
        onPress={handleSubmit(onValid)}
      />
    </AuthLayout>
  );
}
