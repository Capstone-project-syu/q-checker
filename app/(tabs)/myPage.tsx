import { LogoChecked } from "@/components/LogoChecked";
import { ProfileImage } from "@/components/profile/ProfileImage";
import { Button } from "@/components/shared/Button/Button.component";
import { router } from "expo-router";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

export default function MyPage() {
  const [isEditing, setIsEditing] = useState(false);
  const [name, setName] = useState("이름");
  const [role, setRole] = useState("직번");

  const handleEdit = () => {
    if (isEditing) {
      setIsEditing(false);
    } else {
      setIsEditing(true);
    }
  };

  const handleAttendancePress = () => {
    router.push("/qr");
  };

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <LogoChecked width={115} height={33} />
      </View>
      <View style={styles.profileSection}>
        <ProfileImage width={100} height={100} />
        <View style={styles.infoContainer}>
          {isEditing ? (
            <>
              <TextInput
                style={[styles.name, styles.input]}
                value={name}
                onChangeText={setName}
                placeholder="이름"
              />
              <TextInput
                style={[styles.role, styles.input]}
                value={role}
                onChangeText={setRole}
                placeholder="직번"
              />
            </>
          ) : (
            <>
              <Text style={styles.name}>{name}</Text>
              <Text style={styles.role}>{role}</Text>
            </>
          )}
          <View style={styles.buttonContainer}>
            <Button
              size="sm"
              variant="solid"
              color="primary"
              style={styles.editButton}
              onPress={handleEdit}
            >
              {isEditing ? "저장" : "정보 수정"}
            </Button>
          </View>
        </View>
      </View>

      <TouchableOpacity
        style={styles.historySection}
        onPress={handleAttendancePress}
      >
        <Text style={styles.sectionTitle}>출결 내역</Text>
        <View style={styles.historyItem}>
          <Text style={styles.historyDate}>yyyy-mm-dd</Text>
          <Text style={styles.historyText}>신입생 원영회</Text>
          <Text style={styles.historyTime}>xx시 oo분</Text>
        </View>
        <View style={styles.historyItem}>
          <Text style={styles.historyDate}>yyyy-mm-dd</Text>
          <Text style={styles.historyText}>개강 OT</Text>
          <Text style={styles.historyTime}>xx시 oo분</Text>
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
  buttonContainer: {
    width: "100%",
    alignItems: "flex-end",
    marginTop: 10,
  },
  name: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
  },
  role: {
    fontSize: 16,
    color: "#666",
    marginBottom: 15,
  },
  editButton: {
    borderRadius: 20,
    paddingHorizontal: 20,
    paddingVertical: 8,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 6,
    minWidth: 200,
    textAlign: "center",
    marginBottom: 10,
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
