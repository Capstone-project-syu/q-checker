// App.tsx
import React from "react";
import { SafeAreaView, StyleSheet, View } from "react-native";
import { SvgUri } from "react-native-svg";
import IndexScreen from "./app/(tabs)/index";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      {/* IndexScreen 렌더링 */}
      <IndexScreen />

      {/* SVG 이미지 비율 유지하면서 View로 감싸기 */}
      <View style={styles.logoContainer}>
        <SvgUri
          width="100%" // 화면 너비에 맞게 설정
          height="100%" // 화면 높이에 맞게 설정
          uri={require("./assets/logo.svg")} // 로고 파일 불러오기
        />
      </View>
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
  logoContainer: {
    width: 200,
    height: 200,
    aspectRatio: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },
});
