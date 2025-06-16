// components/Typography.component.tsx
import React from "react";
import { StyleSheet, Text } from "react-native";
import { theme } from "../../../src/styles/theme";
import { TypographyProps } from "./Typography.type";

const Typography: React.FC<TypographyProps> = ({
  variant = "body",
  style,
  children,
  ...props
}) => {
  return (
    <Text style={[styles[variant], style]} {...props}>
      {children}
    </Text>
  );
};

// 스타일 정의
const styles = StyleSheet.create({
  h1: theme.typography.h1,
  h2: theme.typography.h2,
  h3: theme.typography.h3,
  h4: {
    fontSize: 20,
    fontWeight: "bold",
    lineHeight: 28,
  },
  h5: {
    fontSize: 18,
    fontWeight: "bold",
    lineHeight: 24,
  },
  h6: {
    fontSize: 16,
    fontWeight: "bold",
    lineHeight: 22,
  },
  title: {
    fontSize: 24,
    fontWeight: "500",
    lineHeight: 32,
  },
  body: theme.typography.body,
  subtitle1: {
    fontSize: 18,
    fontWeight: "400",
    lineHeight: 26,
  },
  subtitle2: {
    fontSize: 14,
    fontWeight: "400",
    lineHeight: 20,
  },
  caption: theme.typography.caption,
});

export default Typography;
