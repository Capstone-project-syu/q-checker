import React from "react";
import { StyleSheet, Text, View } from "react-native";

interface Attendance {
  id: string;
  date: string;
  time: string;
}

interface Props {
  attendances: Attendance[];
}

export const AttendanceList = ({ attendances }: Props) => {
  return (
    <View style={styles.container}>
      {attendances.map((attendance, index) => (
        <View key={index} style={styles.item}>
          <View style={styles.leftSection}>
            <Text style={styles.date}>{attendance.date}</Text>
            <Text style={styles.id}>출결증 {attendance.id}</Text>
          </View>
          <Text style={styles.time}>{attendance.time}</Text>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
  },
  item: {
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
