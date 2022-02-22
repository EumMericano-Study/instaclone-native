import React, { useEffect, useRef } from "react";
import { useForm } from "react-hook-form";
import { TextInput } from "react-native";
import { gql, useMutation } from "@apollo/client";

import AuthButton from "../components/auth/AuthButton";
import AuthLayout from "../components/auth/AuthLayout";
import { StyledTextInput } from "../components/auth/AuthShared";
import { Props } from "../types";

const CREATE_ACCOUNT_MUTATION = gql`
  mutation createAccount(
    $firstName: String!
    $lastName: String!
    $userName: String!
    $email: String!
    $password: String!
  ) {
    createAccount(
      firstName: $firstName
      lastName: $lastName
      userName: $userName
      email: $email
      password: $password
    ) {
      ok
      error
    }
  }
`;

export default function CreateAccount({ navigation }: Props) {
  const { register, handleSubmit, setValue, getValues, watch } = useForm();
  const onCompleted = (data: any) => {
    const {
      createAccount: { ok },
    } = data;
    const { userName, password } = getValues();
    if (ok) navigation.navigate("LogIn", { userName, password });
  };
  const [createAccountMutation, { loading }] = useMutation(
    CREATE_ACCOUNT_MUTATION,
    { onCompleted }
  );
  const lastNameRef = useRef<TextInput>(null);
  const usernameRef = useRef<TextInput>(null);
  const emailRef = useRef<TextInput>(null);
  const passwordRef = useRef<TextInput>(null);

  const onNext = (nextOne: React.RefObject<TextInput>) =>
    nextOne?.current?.focus();

  const onValid = (data: { [x: string]: string }) => {
    if (!loading)
      createAccountMutation({
        variables: {
          ...data,
        },
      });
  };

  useEffect(() => {
    register("firstName", {
      required: true,
    });
    register("lastName", {
      required: true,
    });
    register("userName", {
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
        onChangeText={(text: string) => setValue("firstName", text)}
      />
      <StyledTextInput
        ref={lastNameRef}
        placeholder="Last Name"
        placeholderTextColor="rgba(255,255,255,0.8)"
        returnKeyType="next"
        onSubmitEditing={() => onNext(usernameRef)}
        onChangeText={(text: string) => setValue("lastName", text)}
      />
      <StyledTextInput
        ref={usernameRef}
        placeholder="Username"
        placeholderTextColor="rgba(255,255,255,0.8)"
        returnKeyType="next"
        onSubmitEditing={() => onNext(emailRef)}
        onChangeText={(text: string) => setValue("userName", text)}
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
        disabled={!watch("userName") || !watch("password") || !watch("email")}
        loading={loading}
        onPress={handleSubmit(onValid)}
      />
    </AuthLayout>
  );
}
