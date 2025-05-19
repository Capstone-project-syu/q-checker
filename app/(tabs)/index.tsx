// app/(tabs)/index.tsx
import Button from "@/components/common/button/Button"; // Button 가져오기
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import React from "react";
import { Image, Platform, StyleSheet } from "react-native";

export default function IndexScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: "#D1E8E2", dark: "#1E3A3A" }}
      headerImage={
        <Image
          source={require("@/assets/images/logo.svg")} // Q-CHECKER 로고를 예시로
          style={styles.logoImage}
        />
      }
    >
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Welcome to Q-CHECKER!</ThemedText>
      </ThemedView>

      {/* Step 1: Button 추가 */}
      <ThemedView style={styles.stepContainer}>
        <Button
          buttonSize="big"
          fontSize="big"
          backgroundColor="primary"
          onPress={() => console.log("버튼 클릭됨!")}
        >
          Q-CHECKER 시작하기
        </Button>
      </ThemedView>

      {/* Other steps */}
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Step 1: Start Checking</ThemedText>
        <ThemedText>
          Begin your first check by exploring the{" "}
          <ThemedText type="defaultSemiBold">Checklist</ThemedText> tab.
        </ThemedText>
      </ThemedView>

      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Step 2: Customize</ThemedText>
        <ThemedText>
          Personalize your experience by adjusting your{" "}
          <ThemedText type="defaultSemiBold">Settings</ThemedText>.
        </ThemedText>
      </ThemedView>

      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Step 3: Monitor Progress</ThemedText>
        <ThemedText>
          Track your performance in{" "}
          <ThemedText type="defaultSemiBold">Statistics</ThemedText> section.
        </ThemedText>
      </ThemedView>

      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Shortcut for Dev Tools</ThemedText>
        <ThemedText>
          Press{" "}
          <ThemedText type="defaultSemiBold">
            {Platform.select({
              ios: "cmd + d",
              android: "cmd + m",
              web: "F12",
            })}
          </ThemedText>{" "}
          to open developer tools.
        </ThemedText>
      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    marginBottom: 16,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 16,
  },
  logoImage: {
    height: 60,
    width: 300,
    bottom: 0,
    left: 0,
    position: "absolute",
  },
});
