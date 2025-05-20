// app/login/index.tsx
import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

const kakaoLogo = require("../../assets/kakao.png");
const googleLogo = require("../../assets/google.png");

export default function LoginScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Text style={styles.logoText}>
          Q-<Text style={styles.logoTextBold}>Checker</Text>
          <Text style={styles.logoCheck}>✓</Text>
        </Text>
      </View>
      <TouchableOpacity style={styles.kakaoBtn} activeOpacity={0.8}>
        <Image source={kakaoLogo} style={styles.btnIcon} />
        <Text style={styles.kakaoBtnText}>카카오톡 계정으로 로그인</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.googleBtn} activeOpacity={0.8}>
        <Image source={googleLogo} style={styles.btnIcon} />
        <Text style={styles.googleBtnText}>구글 계정으로 로그인</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  logoContainer: { marginBottom: 48 },
  logoText: {
    fontSize: 40,
    color: "#2E8E14",
    fontWeight: "700",
    letterSpacing: -2,
  },
  logoTextBold: {
    color: "#34A853",
    fontWeight: "700",
  },
  logoCheck: {
    color: "#ED1C24",
    fontWeight: "900",
    fontSize: 32,
    marginLeft: 4,
  },
  kakaoBtn: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFEB00",
    borderRadius: 10,
    height: 45,
    width: 270,
    marginBottom: 16,
    paddingHorizontal: 12,
  },
  kakaoBtnText: {
    color: "#3C1E1E",
    fontSize: 16,
    fontWeight: "bold",
    flex: 1,
    textAlign: "center",
  },
  googleBtn: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#EFEFEF",
    borderRadius: 10,
    height: 45,
    width: 270,
    paddingHorizontal: 12,
  },
  googleBtnText: {
    color: "#222",
    fontSize: 16,
    fontWeight: "bold",
    flex: 1,
    textAlign: "center",
  },
  btnIcon: {
    width: 26,
    height: 26,
    marginRight: 10,
  },
});
