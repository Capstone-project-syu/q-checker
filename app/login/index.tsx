import { GoogleIcon } from "@/components/login/icons/GoogleIcon";
import { KakaoIcon } from "@/components/login/icons/KakaoIcon";
import { SocialLoginButton } from "@/components/login/SocialLoginButton";
import { LogoChecked } from "@/components/LogoChecked";
import { useAuthStore } from "@/stores/authStore";
import { useUserStore } from "@/stores/userStore";
import { useRouter } from "expo-router";
import React from "react";
import { StyleSheet, View } from "react-native";

export default function LoginScreen() {
  const { login } = useAuthStore();
  const { setUser } = useUserStore();
  const router = useRouter();

  const handleKakaoLogin = () => {
    // 간단한 카카오 로그인 시뮬레이션
    const mockUser = {
      id: "kakao_123",
      name: "카카오 사용자",
      email: "kakao@example.com",
      profileImage: "https://example.com/kakao.jpg",
    };

    login("kakao_token_123", "kakao");
    setUser(mockUser);
    router.replace("/(tabs)");
  };

  const handleGoogleLogin = () => {
    // 간단한 구글 로그인 시뮬레이션
    const mockUser = {
      id: "google_123",
      name: "구글 사용자",
      email: "google@gmail.com",
      profileImage: "https://example.com/google.jpg",
    };

    login("google_token_123", "google");
    setUser(mockUser);
    router.replace("/(tabs)");
  };

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
