import styled from "styled-components/native";

interface Prop {
  children: React.ReactNode;
}

export default function AuthLayout({ children }: Prop) {
  return (
    <Container>
      <Logo
        resizeMode="contain"
        source={require("../../assets/charLogo.png")}
      />
      {children}
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
