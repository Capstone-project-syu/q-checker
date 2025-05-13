// App.tsx
import React from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import IndexScreen from "./app/(tabs)/index";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <IndexScreen />
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
