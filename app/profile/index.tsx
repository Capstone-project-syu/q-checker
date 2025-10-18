import React, { useState } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";
import { theme } from "../../src/styles/theme";

import { Button } from "@/components/shared/Button/Button.component";
import { useAuthStore } from "@/store/authStore";
import { router } from "expo-router";

export default function OnboardingScreen() {
  const [name, setName] = useState("");
  const [studentId, setStudentId] = useState("");
  const [nameFocused, setNameFocused] = useState(false);
  const [studentIdFocused, setStudentIdFocused] = useState(false);

  
  const login = useAuthStore((state) => state.login);

  const handleLogIn = () => {
    if (!name || !studentId) {
      alert("이름과 학번을 모두 입력해주세요.");
      return;
    }
    if (studentId.length != 10) {
      alert("잘못된 학번 형식입니다.");
      return;
    }
  
    login(name, studentId);
    router.replace("/");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.logoText}>Q-Checker</Text>
      <View style={styles.stepCircle}>
        <Text style={styles.stepCircleText}>1</Text>
      </View>
      <Text style={styles.title}>학생 정보를 알려주세요.</Text>

      <View style={styles.inputBox}>
        <Text style={styles.inputLabel}>이름</Text>
        <TextInput
          style={[styles.input, nameFocused && styles.inputFocused]}
          placeholder="이름 입력"
          placeholderTextColor="#A0CBA4"
          value={name}
          onChangeText={setName}
          onFocus={() => setNameFocused(true)}
          onBlur={() => setNameFocused(false)}
        />
      </View>

      <View style={styles.inputBox}>
        <Text style={styles.inputLabel}>학번</Text>
        <TextInput
          style={[styles.input, studentIdFocused && styles.inputFocused]}
          placeholder="학번 입력"
          placeholderTextColor="#A0CBA4"
          value={studentId}
          onChangeText={setStudentId}
          keyboardType="numeric"
          onFocus={() => setStudentIdFocused(true)}
          onBlur={() => setStudentIdFocused(false)}
        />
      </View>

      <View style={styles.buttonContainer}>
        <Button onPress={handleLogIn}>
          <Text style={styles.selectButtonText}>완료</Text>
        </Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background || "#fff",
    paddingHorizontal: 32,
    paddingTop: 40,
  },
  logoText: {
    color: theme.colors.primary,
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 34,
  },
  stepCircle: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: theme.colors.primary,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10,
  },
  stepCircleText: {
    color: theme.colors.background || "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: "500",
    marginBottom: 40,
    color: theme.colors.text || "#333",
  },
  inputBox: {
    marginBottom: 24,
  },
  inputLabel: {
    fontSize: 16,
    color: theme.colors.primary,
    fontWeight: "bold",
    marginBottom: 5,
  },
  input: {
    borderBottomWidth: 1,
    borderBottomColor: theme.colors.primary,
    fontSize: 16,
    paddingVertical: 8,
    color: theme.colors.text || "#222",
  },
  inputFocused: {
    borderBottomWidth: 2,
    borderBottomColor: theme.colors.primary,
  },
  buttonContainer: {
    padding: 16,
  },
  selectButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
    padding: 12,
  },
});
