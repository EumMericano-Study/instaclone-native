import { useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import AppLoading from "expo-app-loading";
import * as Font from "expo-font";
import { Asset } from "expo-asset";
import { NavigationContainer } from "@react-navigation/native";
import { ApolloProvider, useReactiveVar } from "@apollo/client";

import client, { isLoggedInVar, tokenVar } from "./apollo";
import LoggedOutNav from "./navigators/LoggedOutNav";
import LoggedInNav from "./navigators/LoggedInNav";
import AsyncStorageLib from "@react-native-async-storage/async-storage";

export default function App() {
  const [loading, setLoading] = useState<boolean>(true);
  const onFinish = () => setLoading(false);
  const isLoggedIn = useReactiveVar(isLoggedInVar);

  const preloadAssets = async () => {
    const fontsToLoad = [Ionicons.font];
    const fontPromises = fontsToLoad.map((font) => Font.loadAsync(font));

    const imagesToLoad = [require("./assets/charLogo.png")];
    const imagePromises = imagesToLoad.map((image) => Asset.loadAsync(image));

    await Promise.all([...fontPromises, ...imagePromises]);
  };

  const preload = async () => {
    const token = await AsyncStorageLib.getItem("token");
    if (token) {
      isLoggedInVar(true);
      tokenVar(token);
    }
    return preloadAssets();
  };

  if (loading)
    return (
      <AppLoading
        startAsync={preload}
        onError={console.warn}
        onFinish={onFinish}
      />
    );

  return (
    <ApolloProvider client={client}>
      <NavigationContainer>
        {isLoggedIn ? <LoggedInNav /> : <LoggedOutNav />}
      </NavigationContainer>
    </ApolloProvider>
  );
}
