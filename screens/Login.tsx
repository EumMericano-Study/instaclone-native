import React, { useRef } from "react";
import { TextInput } from "react-native";

import AuthButton from "../components/auth/AuthButton";
import AuthLayout from "../components/auth/AuthLayout";
import { StyledTextInput } from "../components/auth/AuthShared";

export default function LogIn() {
  const passwordRef = useRef<TextInput>(null);

  const onNext = (nextOne: React.RefObject<TextInput>) =>
    nextOne?.current?.focus();

  const onDone = () => alert("done");

  return (
    <AuthLayout>
      <StyledTextInput
        auttoFocus
        placeholder="Username"
        placeholderTextColor="rgba(255,255,255,0.8)"
        returnKeyType="next"
        onSubmitEditing={() => onNext(passwordRef)}
      />
      <StyledTextInput
        ref={passwordRef}
        placeholder="Password"
        placeholderTextColor="rgba(255,255,255,0.8)"
        secureTextEntry
        returnKeyType="done"
        lastOne={true}
        onSubmitEditing={onDone}
      />
      <AuthButton text="Create Account" disabled={true} onPress={() => null} />
    </AuthLayout>
  );
}
