import React, { useEffect, useRef } from "react";
import { useForm } from "react-hook-form";
import { TextInput } from "react-native";

import AuthButton from "../components/auth/AuthButton";
import AuthLayout from "../components/auth/AuthLayout";
import { StyledTextInput } from "../components/auth/AuthShared";

export default function LogIn() {
  const { register, handleSubmit, setValue } = useForm();

  const passwordRef = useRef<TextInput>(null);

  const onNext = (nextOne: React.RefObject<TextInput>) =>
    nextOne?.current?.focus();

  const onValid = (data: { [x: string]: string }) => {
    console.log(data);
  };

  useEffect(() => {
    register("userame", {
      required: true,
    });
    register("password", {
      required: true,
    });
  }, [register]);

  return (
    <AuthLayout>
      <StyledTextInput
        auttoFocus
        placeholder="Username"
        placeholderTextColor="rgba(255,255,255,0.8)"
        returnKeyType="next"
        autoCapitalize="none"
        onSubmitEditing={() => onNext(passwordRef)}
        onChangeText={(text: string) => setValue("userame", text)}
      />
      <StyledTextInput
        ref={passwordRef}
        placeholder="Password"
        placeholderTextColor="rgba(255,255,255,0.8)"
        secureTextEntry
        returnKeyType="done"
        autoCapitalize="none"
        lastOne={true}
        onSubmitEditing={handleSubmit(onValid)}
      />
      <AuthButton
        text="Create Account"
        disabled={false}
        onPress={handleSubmit(onValid)}
      />
    </AuthLayout>
  );
}
