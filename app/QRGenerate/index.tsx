import { Button } from "@/components/shared/Button/Button.component";
import { router, useLocalSearchParams } from "expo-router";
import { useEffect, useState } from "react";
import { Alert, StyleSheet, Text, View } from "react-native";
import InputContainer from "../features/QRGenerate/InputContainer";

import { useQRStore } from "@/store/qrstore";
import { Picker } from "@react-native-picker/picker";
import uuid from 'react-native-uuid';


export default function QRGenerate() {
  const [eventName, setEventName] = useState("");
  const [duration, setDuration] = useState("");

  const [gpsCoords, setGpsCoords] = useState("");
  const [gpsAddress, setGpsAddress] = useState("");

  const [useNFC, setUseNFC] = useState(false);
  const [nfcRoom, setNfcRoom] = useState("");

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
      const now = new Date().toISOString().split("T")[0]; // YYYY-MM-DD
      useQRStore.getState().addQR({
        id: uuid.v4(),
        title: eventName,
        date: now,
        active: true,
        nfc: useNFC,
        nfcRoom: nfcRoom,
        gps: gpsAddress,
      });
      router.push("/");
    } catch (e) {
      Alert.alert(
        "QR 생성 실패",
        "QR 코드를 생성하는 중 문제가 발생했습니다. 다시 시도해주세요."
      );
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
      
      {/* ✅ NFC 사용 여부 토글 */}
      <View style={styles.toggleContainer}>
        <Text style={styles.label}>NFC 사용 설정</Text>
        <Button onPress={() => setUseNFC(!useNFC)}>
          <Text style={styles.toggleText}>{useNFC ? "ON" : "OFF"}</Text>
        </Button>
      </View>

      {/* ✅ NFC ON일 때 강의실 선택 */}
      {useNFC ? (
        <View style={styles.pickerContainer}>
          <Text style={styles.label}>강의실 선택</Text>
          <Picker
            selectedValue={nfcRoom}
            onValueChange={(value) => setNfcRoom(value)}
          >
            <Picker.Item label="강의실을 선택하세요" value="" />
            <Picker.Item label="제1실습관 401호" value="401" />
            <Picker.Item label="제1실습관 402호" value="402" />
            <Picker.Item label="제1실습관 403호" value="403" />
            <Picker.Item label="제1실습관 404호" value="404" />
          </Picker>
        </View>
      ) : (
        <InputContainer
          label="GPS 위치 설정"
          value={gpsAddress || gpsCoords} // 주소가 있으면 주소를 보여줌
          onPress={() => router.push(`/QRGenerate/map?location=${gpsCoords}`)}
          type="gps"
        />
      )}
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
  toggleContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 12,
  },
  label: {
    fontSize: 16,
    flex: 1,
  },
  toggleText: {
    color: "#fff",
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  pickerContainer: {
    marginVertical: 12,
  },
});
