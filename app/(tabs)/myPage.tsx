import { LogoChecked } from "@/components/LogoChecked";
import { ProfileImage } from "@/components/profile/ProfileImage";
import { Button } from "@/components/shared/Button/Button.component";
import { useAuthStore } from "@/stores/authStore";
import { useUserStore } from "@/stores/userStore";
import { router } from "expo-router";
import React from "react";
import { Alert, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function MyPage() {
  const { logout } = useAuthStore();
  const { user, clearUser } = useUserStore();

  const handleLogout = () => {
    Alert.alert("로그아웃", "정말 로그아웃하시겠습니까?", [
      {
        text: "취소",
        style: "cancel",
      },
      {
        text: "로그아웃",
        onPress: () => {
          logout();
          clearUser();
          router.replace("/login");
        },
      },
    ]);
  };

  const handleAttendancePress = () => {
    router.push("../qr");
  };

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <LogoChecked width={115} height={33} />
      </View>
      <View style={styles.profileSection}>
        <ProfileImage width={100} height={100} />
        <View style={styles.infoContainer}>
          <Text style={styles.name}>{user?.name || "사용자"}</Text>
          <Text style={styles.email}>{user?.email || "이메일"}</Text>
          <Button
            size="sm"
            variant="outline"
            color="danger"
            style={styles.logoutButton}
            onPress={handleLogout}
          >
            로그아웃
          </Button>
        </View>
      </View>

      <TouchableOpacity
        style={styles.historySection}
        onPress={handleAttendancePress}
      >
        <Text style={styles.sectionTitle}>출결 내역</Text>
        <View style={styles.historyItem}>
          <Text style={styles.historyDate}>2024-01-15</Text>
          <Text style={styles.historyText}>신입생 원영회</Text>
          <Text style={styles.historyTime}>14시 00분</Text>
        </View>
        <View style={styles.historyItem}>
          <Text style={styles.historyDate}>2024-01-20</Text>
          <Text style={styles.historyText}>개강 OT</Text>
          <Text style={styles.historyTime}>10시 30분</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
  logoContainer: {
    position: "absolute",
    top: 20,
    left: "50%",
    transform: [{ translateX: -57.5 }],
    width: 115,
    height: 33,
    zIndex: 1,
  },
  profileSection: {
    alignItems: "center",
    paddingTop: 73,
    paddingBottom: 20,
    backgroundColor: "white",
  },
  infoContainer: {
    width: "100%",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  name: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
  },
  email: {
    fontSize: 16,
    color: "#666",
    marginBottom: 20,
  },
  logoutButton: {
    borderRadius: 20,
    paddingHorizontal: 20,
    paddingVertical: 8,
  },
  historySection: {
    padding: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 15,
  },
  historyItem: {
    backgroundColor: "white",
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  historyDate: {
    fontSize: 14,
    color: "#666",
  },
  historyText: {
    fontSize: 14,
    flex: 1,
    marginLeft: 10,
  },
  historyTime: {
    fontSize: 14,
    color: "#666",
  },
});
