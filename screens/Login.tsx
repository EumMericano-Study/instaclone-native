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

  const onValid = (data: any) => {
    console.log(data);
  };

  useEffect(() => {
    register("Username");
    register("Password");
  }, [register]);

  return (
    <AuthLayout>
      <StyledTextInput
        auttoFocus
        placeholder="Username"
        placeholderTextColor="rgba(255,255,255,0.8)"
        returnKeyType="next"
        onSubmitEditing={() => onNext(passwordRef)}
        onChangeText={(text: string) => setValue("Username", text)}
      />
      <StyledTextInput
        ref={passwordRef}
        placeholder="Password"
        placeholderTextColor="rgba(255,255,255,0.8)"
        secureTextEntry
        returnKeyType="done"
        lastOne={true}
        onSubmitEditing={handleSubmit(onValid)}
        onChangeText={(text: string) => setValue("Password", text)}
      />
      <AuthButton
        text="Create Account"
        disabled={true}
        onPress={handleSubmit(onValid)}
      />
    </AuthLayout>
  );
}
