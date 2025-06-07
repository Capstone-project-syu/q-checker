import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

interface Props {
  onPress: () => void;
  icon: React.ReactNode;
  text: string;
  style?: object;
  textStyle?: object;
}

export const SocialLoginButton = ({
  onPress,
  icon,
  text,
  style,
  textStyle,
}: Props) => {
  return (
    <TouchableOpacity
      style={[styles.button, style]}
      activeOpacity={0.8}
      onPress={onPress}
    >
      {icon}
      <Text style={[styles.text, textStyle]}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 10,
    height: 45,
    width: 270,
    paddingHorizontal: 12,
  },
  text: {
    fontSize: 16,
    fontWeight: "bold",
    flex: 1,
    textAlign: "center",
  },
});
