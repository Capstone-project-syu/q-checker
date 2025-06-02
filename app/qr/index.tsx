import { ScrollView, StyleSheet, Text, View } from "react-native";
import { SvgUri } from "react-native-svg";

export default function QRScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>QR 코드</Text>
        <Text style={styles.headerSubtitle}>비활성화</Text>
      </View>

      <View style={styles.qrSection}>
        <View style={styles.qrContainer}>
          <SvgUri
            width={200}
            height={200}
            uri={require("../../components/qr/test-qr.svg")}
          />
        </View>
      </View>

      <View style={styles.listSection}>
        <Text style={styles.sectionTitle}>출결 내역</Text>
        <ScrollView>
          <View style={styles.listItem}>
            <View style={styles.leftSection}>
              <Text style={styles.date}>yyyy-mm-dd</Text>
              <Text style={styles.id}>출결증 2022100870</Text>
            </View>
            <Text style={styles.time}>xx시 oo분</Text>
          </View>
          <View style={styles.listItem}>
            <View style={styles.leftSection}>
              <Text style={styles.date}>yyyy-mm-dd</Text>
              <Text style={styles.id}>출결증 2022100877</Text>
            </View>
            <Text style={styles.time}>xx시 oo분</Text>
          </View>
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 10,
    backgroundColor: "#2E7D32",
  },
  headerTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "white",
    marginRight: 10,
  },
  headerSubtitle: {
    fontSize: 14,
    color: "#333",
    backgroundColor: "white",
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 12,
  },
  qrSection: {
    padding: 20,
    alignItems: "center",
  },
  qrContainer: {
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
  listSection: {
    flex: 1,
    padding: 20,
    backgroundColor: "#f5f5f5",
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 15,
  },
  listItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "white",
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
  },
  leftSection: {
    flex: 1,
  },
  date: {
    fontSize: 14,
    color: "#666",
    marginBottom: 4,
  },
  id: {
    fontSize: 14,
    fontWeight: "bold",
  },
  time: {
    fontSize: 14,
    color: "#666",
  },
});
