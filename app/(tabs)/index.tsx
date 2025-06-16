import { StyleSheet, Text, View, Pressable } from "react-native";
import ActionButton from "../features/QRMain/sections/ActionButton/ActionButton.section";
import HistoryList from "../features/QRMain/sections/HistoryList/HistoryList.section";
import { LogoChecked } from "@/components/LogoChecked";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <LogoChecked width={115} height={33} />
      </View>

      {/* 버튼 영역 */}
      <View style={styles.buttonRow}>
        <ActionButton buttonText="QR 촬영" linkTo="../QRCheck" />
        <ActionButton buttonText="QR 생성" linkTo="../QRGenerate" />
      </View>

      {/* 리스트 영역 */}
      <HistoryList style={styles.historyContainer} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 50,
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
  logoText: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#2E7D32",
  },
  logoutButton: {
    backgroundColor: "#2E7D32",
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 6,
  },
  logoutText: {
    color: "white",
    fontWeight: "bold",
  },
  buttonRow: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingHorizontal: 20,
    marginBottom: 40,
    marginTop: 70,
  },
  historyContainer: {
    flex: 1,
    paddingHorizontal: 20,
  },
});
