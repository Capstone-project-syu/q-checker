import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

type Props = {
  label: string;
  value: string;
  onChangeText?: (text: string) => void;
  onPress?: () => void;
  type?: "text" | "duration" | "gps";
};

export default function InputContainer({
  label,
  value,
  onChangeText,
  onPress,
  type = "text",
}: Props) {
  const isGps = type === "gps";
  const isDuration = type === "duration";

  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>

      <TouchableOpacity style={[styles.inputWrapper, isGps && styles.gpsBackground]}>
        <TextInput
          value={value}
          onChangeText={onChangeText}
          editable={!isGps}
          onPressIn={isGps ? onPress : undefined}
          keyboardType={isDuration ? "numeric" : "default"}
          style={[styles.input]}
        />

        {isDuration && <Text style={styles.suffix}>분</Text>}
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    fontWeight: "500",
    marginBottom: 8,
  },
  inputWrapper: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    paddingHorizontal: 12,
    backgroundColor: "#fff",
  },
  gpsBackground: {
    backgroundColor: "#f5f5f5",
  },
  input: {
    flex: 1,
    paddingVertical: 12,
    color: "#000",
  },
  suffix: {
    marginLeft: 8,
    fontSize: 16,
  },
});