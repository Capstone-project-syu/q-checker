// App.tsx
import React from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import { SvgUri } from "react-native-svg";
import IndexScreen from "./app/(tabs)/index";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <IndexScreen />

      <SvgUri width="200" height="200" uri={require("./assets/logo.svg")} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
});
