import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import Typography from "../Typography/Typography.component";
import { ButtonProps } from "./Button.type";

export const Button: React.FC<ButtonProps> = (props) => {
  const {
    size = "md",
    variant = "solid",
    color = "primary",
    disabled = false,
  } = props;

  return (
    <TouchableOpacity
      style={[
        styles.container,
        styles[`container-${size}`],
        styles[`container-variant-${variant}`],
        styles[`container-color-${color}`],
        disabled && styles["container-color-disabled"],
      ]}
      disabled={disabled}
    >
      <Typography
        variant="body"
        style={[
          styles[`text-size-${size}`],
          styles[`text-color-${variant}-${color}`],
        ]}
      >
        {props.children}
      </Typography>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
    borderRadius: 5,
  },
  "container-sm": {
    paddingVertical: 8,
    paddingHorizontal: 12,
  },
  "container-md": {
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
  "container-lg": {
    paddingVertical: 14,
    paddingHorizontal: 20,
  },
  "container-xl": {
    paddingVertical: 16,
    paddingHorizontal: 24,
  },
  "container-variant-solid": {
    backgroundColor: "#2E8E14",
  },
  "container-variant-outline": {
    borderWidth: 1,
    borderColor: "#2E8E14",
  },
  "container-color-primary": {
    backgroundColor: "#2E8E14",
  },
  "container-color-secondary": {
    backgroundColor: "#34C759",
  },
  "container-color-tertiary": {
    backgroundColor: "#808080",
  },
  "container-color-disabled": {
    backgroundColor: "#cccccc",
  },
  "text-size-sm": {
    fontSize: 12,
  },
  "text-size-md": {
    fontSize: 14,
  },
  "text-size-lg": {
    fontSize: 16,
  },
  "text-size-xl": {
    fontSize: 18,
  },
  "text-color-solid-primary": {
    color: "#fff",
  },
  "text-color-solid-secondary": {
    color: "#fff",
  },
  "text-color-solid-tertiary": {
    color: "#fff",
  },
  "text-color-outline-primary": {
    color: "#2E8E14",
  },
  "text-color-outline-secondary": {
    color: "#34C759",
  },
  "text-color-outline-tertiary": {
    color: "#808080",
  },
});
