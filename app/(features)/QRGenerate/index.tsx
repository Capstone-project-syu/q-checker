import { createQRCode } from "@/app/api/qrcode";
import { Button } from "@/components/shared/Button/Button.component";
import { router, useLocalSearchParams } from "expo-router";
import { useEffect, useState } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";

export default function QRGenerate() {
  const [eventName, setEventName] = useState("");
  const [duration, setDuration] = useState("");
  const [gpsLocation, setGpsLocation] = useState("");

  // ✅ URL로부터 받은 위치 데이터
  const params = useLocalSearchParams<{ location?: string }>();

  useEffect(() => {
    if (params.location) {
      setGpsLocation(params.location);
    }
  }, [params.location]);

  const handleCreate = async () => {
    try {
      if (!eventName || !duration || !gpsLocation) {
        console.log("모든 항목을 입력해주세요.");
        return;
      }
  
      const res = await createQRCode(eventName, Number(duration), gpsLocation);
      console.log(res);
  
      router.push("/");
    } catch (e) {
      console.error("QR 생성 실패:", e);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>이벤트 이름</Text>
      <TextInput style={styles.input} value={eventName} onChangeText={setEventName} />

      <Text style={styles.label}>유효시간 설정</Text>
      <TextInput style={styles.input} value={duration} onChangeText={setDuration} keyboardType="numeric" />

      <Text style={styles.label}>GPS 위치 설정</Text>
      <TextInput
        style={styles.input}
        value={gpsLocation}
        placeholder="GPS 위치를 선택하세요"
        editable={false}
        onPressIn={() => router.push("/QRGenerate/map")}
      />

      <Button onPress={handleCreate}>
        <Text style={styles.buttonText}>생성</Text>
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: "#fff" },
  label: { marginTop: 16, fontWeight: "bold" },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    borderRadius: 8,
    marginTop: 4,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    textAlign: "center",
    padding: 12,
  },
});
