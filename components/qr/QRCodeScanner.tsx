import React from "react";
import { StyleSheet, View } from "react-native";
import QRCode from "react-native-qrcode-svg";

interface QRCodeScannerProps {
  qrData?: string;
  size?: number;
}

export const QRCodeScanner = ({ qrData, size = 200 }: QRCodeScannerProps) => {
  // QR 데이터가 없으면 기본 메시지 표시
  const displayValue = qrData || "QR 코드 데이터가 없습니다.";

  return (
    <View style={styles.container}>
      <QRCode
        value={displayValue}
        size={size}
        backgroundColor="white"
        color="black"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 200,
    height: 200,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
});
