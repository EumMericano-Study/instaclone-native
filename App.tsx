import { useState } from "react";
import { Ionicons } from "@expo/vector-icons";

import AppLoading from "expo-app-loading";
import * as Font from "expo-font";
import { Asset } from "expo-asset";
import LoggedOutNav from "./navigators/LoggedOutNav";

export default function App() {
  const [loading, setLoading] = useState<boolean>(true);
  const onFinish = () => setLoading(false);
  const preload = async () => {
    const fontsToLoad = [Ionicons.font];
    const fontPromises = fontsToLoad.map((font) => Font.loadAsync(font));

    const imagesToLoad = [require("./assets/charLogo.png")];
    const imagePromises = imagesToLoad.map((image) => Asset.loadAsync(image));

    await Promise.all([...fontPromises, ...imagePromises]);
  };

  if (loading)
    return (
      <AppLoading
        startAsync={preload}
        onError={console.warn}
        onFinish={onFinish}
      />
    );
  return <LoggedOutNav />;
}
