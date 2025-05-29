import { Column } from "@/components/layout/Column";
import { Flex } from "@/components/layout/Flex";
import { LogoChecked } from "@/components/LogoChecked";
import { StyleSheet, View } from "react-native";
import ActionButton from "../features/QRMain/sections/ActionButton/ActionButton.section";
import HistoryList from "../features/QRMain/sections/HistoryList/HistoryList.section";

export default function HomeScreen() {
  return (
    <Column>
      <Flex style={styles.actionButtons}>
        <ActionButton
          buttonImage={
            <View style={styles.logoContainer}>
              <LogoChecked width="100%" height="100%" />
            </View>
          }
          buttonText="QR 출결"
          linkTo="../features/QRCheck"
        />
        <ActionButton
          buttonImage={
            <View style={styles.logoContainer}>
              <LogoChecked width="100%" height="100%" />
            </View>
          }
          buttonText="QR 생성"
          linkTo="../features/QRGenerate"
        />
      </Flex>
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
  logoContainer: {
    width: 60,
    height: 60,
    justifyContent: "center",
    alignItems: "center",
  },
});
