import React from "react";
import { StyleSheet, View } from "react-native";
import QRCode from "react-native-qrcode-svg";

export const QRCodeScanner = () => {
  const dummyQRValue = "https://q-checker.com/attendance/123456";

  return (
    <View style={styles.container}>
      <QRCode
        value={dummyQRValue}
        size={200}
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
