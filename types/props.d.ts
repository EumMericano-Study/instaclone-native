import { NativeStackScreenProps } from "@react-navigation/native-stack";

type RootStackParamList = {
  Welcome: undefined;
  LogIn?: { userName?: string; password?: string };
  CreateAccount: undefined;
};

type Props = NativeStackScreenProps<RootStackParamList>;

export default Props;
