// app/login/index.tsx
import { GoogleIcon } from "@/components/login/icons/GoogleIcon";
import { KakaoIcon } from "@/components/login/icons/KakaoIcon";
import { SocialLoginButton } from "@/components/login/SocialLoginButton";
import { LogoChecked } from "@/components/LogoChecked";
import React from "react";
import { StyleSheet, View } from "react-native";

export default function LoginScreen() {
  const handleKakaoLogin = () => {};

  const handleGoogleLogin = () => {};

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <LogoChecked width={280} height={280 * (74 / 313)} />
      </View>
      <SocialLoginButton
        icon={<KakaoIcon width={26} height={26} />}
        text="카카오톡 계정으로 로그인"
        onPress={handleKakaoLogin}
        style={styles.kakaoBtn}
        textStyle={styles.kakaoBtnText}
      />
      <SocialLoginButton
        icon={<GoogleIcon width={26} height={26} />}
        text="구글 계정으로 로그인"
        onPress={handleGoogleLogin}
        style={styles.googleBtn}
        textStyle={styles.googleBtnText}
      />
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
  logoContainer: {
    marginBottom: 48,
    width: 280,
    height: 280 * (74 / 313),
    justifyContent: "center",
    alignItems: "center",
  },
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
    backgroundColor: "#FFEB00",
    marginBottom: 16,
  },
  kakaoBtnText: {
    color: "#3C1E1E",
  },
  googleBtn: {
    backgroundColor: "#EFEFEF",
  },
  googleBtnText: {
    color: "#222",
  },
});
