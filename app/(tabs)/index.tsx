import { Image } from "expo-image";

import { Column } from "@/components/layout/Column";
import { Flex } from "@/components/layout/Flex";
import { StyleSheet } from "react-native";
import ActionButton from "../features/QRMain/sections/ActionButton/ActionButton.section";
import HistoryList from "../features/QRMain/sections/HistoryList/HistoryList.section";

export default function HomeScreen() {
  return (
    <Column>
      {/* qr 출결, 생성 버튼 */}
      <Flex style={styles.actionButtons}>
        <ActionButton
          buttonImage={
            <Image source={require("@/assets/images/partial-react-logo.png")} />
          }
          buttonText="QR 출결"
          linkTo="../features/QRCheck"
        />
        <ActionButton
          buttonImage={
            <Image source={require("@/assets/images/partial-react-logo.png")} />
          }
          buttonText="QR 생성"
          linkTo="../features/QRGenerate"
        />
      </Flex>
      {/* qr 생성 내역 */}
      <HistoryList />
    </Column>
  );
}

const styles = StyleSheet.create({
  actionButtons: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 30,
  },
});
