// components/Typography.component.tsx
import React from "react";
import { StyleSheet, Text } from "react-native";
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
  h1: {
    fontSize: 32,
    fontWeight: "bold",
    lineHeight: 40,
  },
  h2: {
    fontSize: 28,
    fontWeight: "bold",
    lineHeight: 36,
  },
  h3: {
    fontSize: 24,
    fontWeight: "bold",
    lineHeight: 32,
  },
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
  body: {
    fontSize: 16,
    fontWeight: "400",
    lineHeight: 22,
  },
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
  caption: {
    fontSize: 12,
    fontWeight: "300",
    lineHeight: 18,
  },
});

export default Typography;
