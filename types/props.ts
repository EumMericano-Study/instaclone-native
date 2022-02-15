import { NativeStackScreenProps } from "@react-navigation/native-stack";

type RootStackParamList = {
  Welcome: undefined;
  Login: undefined;
  CreateAccount: undefined;
};

type Props = NativeStackScreenProps<RootStackParamList>;

export default Props;
