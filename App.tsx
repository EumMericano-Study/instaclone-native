import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import { Ionicons } from "@expo/vector-icons";

import AppLoading from "expo-app-loading";
import * as Font from "expo-font";

export default function App() {
  const [loading, setLoading] = useState<boolean>(true);
  const onFinish = () => setLoading(false);
  const preload = async () => {
    const fontsToLoad = [Ionicons.font];
    const fontPromises = fontsToLoad.map((font) => Font.loadAsync(font));

    await Promise.all([...fontPromises]);
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
    <View style={styles.container}>
      <Text>Hello!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
