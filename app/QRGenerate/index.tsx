import { createQRCode } from "@/app/api/qrcode";
import { Button } from "@/components/shared/Button/Button.component";
import { router, useLocalSearchParams } from "expo-router";
import { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import InputContainer from "../(features)/QRGenerate/_components/InputContainer";

export default function QRGenerate() {
  const [eventName, setEventName] = useState("");
  const [duration, setDuration] = useState("");

  const [gpsCoords, setGpsCoords] = useState("");
  const [gpsAddress, setGpsAddress] = useState("");

  const params = useLocalSearchParams<{ location?: string; address?: string }>();

  useEffect(() => {
    if (params.location) {
      setGpsCoords(params.location);
    }
    if (params.address) {
      setGpsAddress(params.address);
    }
  }, [params.location, params.address]);


  const handleCreate = async () => {
    if (!eventName || !duration || !gpsAddress) {
      console.log("모든 항목을 입력해주세요.");
      return;
    }

    try {
      const res = await createQRCode(eventName, Number(duration), gpsAddress);
      console.log(res);
      router.push("/");
    } catch (e) {
      console.error("QR 생성 실패:", e);
    }
  };

  return (
    <View style={styles.container}>
      <InputContainer
        label="이벤트 이름"
        value={eventName}
        onChangeText={setEventName}
      />
      <InputContainer
        label="유효시간 설정"
        value={duration}
        onChangeText={setDuration}
        type="duration"
      />
      <InputContainer
        label="GPS 위치 설정"
        value={gpsAddress || gpsCoords} // 주소가 있으면 주소를 보여줌
        onPress={() => router.push(`/QRGenerate/map?location=${gpsCoords}`)}
        type="gps"
      />
      <Button onPress={handleCreate}>
        <Text style={styles.buttonText}>생성</Text>
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    textAlign: "center",
    padding: 12,
  },
});
