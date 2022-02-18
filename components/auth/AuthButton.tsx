import styled from "styled-components/native";
import { colors } from "../../color";

interface Props {
  text: string;
  disabled: boolean;
  onPress: () => void;
}

export default function AuthButton({ onPress, disabled, text }: Props) {
  return (
    <Button disabled={disabled} onPress={onPress}>
      <ButtonText>{text}</ButtonText>
    </Button>
  );
}

const Button = styled.TouchableOpacity`
  width: 100%;
  background-color: ${colors.blue};

  opacity: ${(props: { disabled: boolean }) => (props.disabled ? "0.5" : "1")};

  padding: 13px 10px;
  border-radius: 3px;
`;

const ButtonText = styled.Text`
  color: white;
  text-align: center;
`;
