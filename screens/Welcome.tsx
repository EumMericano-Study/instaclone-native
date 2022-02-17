import React from "react";
import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";
import { colors } from "../color";
import { Props } from "../types";

export default function Welcome({ navigation }: Props) {
  const goToCreateAccount = () => navigation.navigate("CreateAccount");
  const goToLogIn = () => navigation.navigate("LogIn");
  return (
    <Container>
      <Logo resizeMode="contain" source={require("../assets/charLogo.png")} />
      <CreateAccount disabled={false} onPress={goToCreateAccount}>
        <CreateAccountText>Create Account</CreateAccountText>
      </CreateAccount>
      <TouchableOpacity onPress={goToLogIn}>
        <LoginLink>Log In</LoginLink>
      </TouchableOpacity>
    </Container>
  );
}

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;

  background-color: black;

  padding: 0px 30px;
`;

const Logo = styled.Image`
  max-width: 50%;
  height: 150px;
`;

const CreateAccount = styled.TouchableOpacity`
  width: 100%;
  background-color: ${colors.blue};

  opacity: ${(props: { disabled: boolean }) => (props.disabled ? "0.5" : "1")};

  padding: 13px 10px;
  border-radius: 3px;
`;

const CreateAccountText = styled.Text`
  color: white;
  text-align: center;
`;

const LoginLink = styled.Text`
  font-weight: 600;
  color: ${colors.blue};

  margin-top: 15px;
`;
