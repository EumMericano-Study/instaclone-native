import { gql, useMutation } from "@apollo/client";
import React, { useEffect, useRef } from "react";
import { useForm } from "react-hook-form";
import { TextInput } from "react-native";

import AuthButton from "../components/auth/AuthButton";
import AuthLayout from "../components/auth/AuthLayout";
import { StyledTextInput } from "../components/auth/AuthShared";

const LOGIN_MUTATION = gql`
  mutation login($userName: String!, $password: String!) {
    login(userName: $userName, password: $password) {
      ok
      token
      error
    }
  }
`;

export default function LogIn() {
  const { register, handleSubmit, setValue, watch } = useForm();
  const passwordRef = useRef<TextInput>(null);

  const onCompleted = (data: any) => {
    console.log(data);
  };
  const [logInMutation, { loading }] = useMutation(LOGIN_MUTATION, {
    onCompleted,
  });

  const onNext = (nextOne: React.RefObject<TextInput>) =>
    nextOne?.current?.focus();

  const onValid = (data: { [x: string]: string }) => {
    if (!loading) {
      logInMutation({
        variables: {
          ...data,
        },
      });
    }
  };

  useEffect(() => {
    register("userName", {
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
        onChangeText={(text: string) => setValue("userName", text)}
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
        onChangeText={(text: string) => setValue("password", text)}
      />
      <AuthButton
        text="Create Account"
        disabled={!watch("userName") || !watch("password")}
        loading={loading}
        onPress={handleSubmit(onValid)}
      />
    </AuthLayout>
  );
}
