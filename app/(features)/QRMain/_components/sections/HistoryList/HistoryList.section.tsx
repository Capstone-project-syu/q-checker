import { MaterialIcons } from "@expo/vector-icons";
import type { PropsWithChildren } from "react";
import { FlatList, Pressable, StyleSheet, Text, View } from "react-native";

type HistoryItemData = {
  id: string;
  title: string;
  date: string;
  active: boolean;
};

const dummyData: HistoryItemData[] = [
];

export default function HistoryList() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>QR 생성 내역</Text>

      <FlatList
        data={dummyData}
        renderItem={({ item }) => (
          <HistoryItem
            title={item.title}
            date={item.date}
            active={item.active}
          />
        )}
        keyExtractor={(item) => item.id}
        ListEmptyComponent={
          <Text style={styles.emptyText}>아직 생성한 QR 내역이 없습니다.</Text>
        }
      />
    </View>
  );
}

type HistoryItemProps = PropsWithChildren<{
  title: string;
  date: string;
  active: boolean;
}>;

function HistoryItem({ title, date, active }: HistoryItemProps) {
  return (
    <View style={styles.itemRow}>
      <View>
        <Text style={styles.dateText}>{date}</Text>
        <Text style={styles.titleText}>{title}</Text>
      </View>
      <View style={styles.statusWrapper}>
        <View
          style={[
            styles.statusDot,
            { backgroundColor: active ? "green" : "gray" },
          ]}
        />
        <Pressable>
          <MaterialIcons name="more-vert" size={20} color="#333" />
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 30,
    flex: 1,
  },
  header: {
    fontWeight: "bold",
    fontSize: 16,
    marginBottom: 16,
  },
  emptyText: {
    color: "#888",
    textAlign: "center",
    paddingVertical: 20,
  },
  itemRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },
  dateText: {
    fontSize: 12,
    color: "#888",
  },
  titleText: {
    fontSize: 16,
    fontWeight: "500",
  },
  statusWrapper: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
  statusDot: {
    width: 12,
    height: 12,
    borderRadius: 6,
  },
});
