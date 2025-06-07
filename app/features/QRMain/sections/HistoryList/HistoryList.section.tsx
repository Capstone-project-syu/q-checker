import { Space } from "@/components/layout/Space";
import type { PropsWithChildren } from 'react';
import { FlatList } from "react-native";

type HistoryItemData = {
  id: string;
  title: string;
};

const dummyData: HistoryItemData[] = [
];

export default function HistoryList() {
  return (
    <FlatList
        data={dummyData}
        renderItem={({ item }) => (
          <HistoryItem/>
        )}
        keyExtractor={(item) => item.id}
        ListEmptyComponent={
          <HistoryItem>
            아직 생성한 QR 내역이 없습니다.
          </HistoryItem>
        }
      />
  );
}

type HistoryItemProps = PropsWithChildren<{
  title?: string;
}>;

function HistoryItem(props: HistoryItemProps){
  return (
    <Space width={100} height={100}>

    </Space>
  );
}
