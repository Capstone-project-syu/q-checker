import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import { theme } from "../../../src/styles/theme";
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
  "container-variant-solid": {
    backgroundColor: theme.colors.primary,
  },
  "container-variant-outline": {
    borderWidth: 1,
    borderColor: theme.colors.primary,
  },
  "container-color-primary": {
    backgroundColor: theme.colors.primary,
  },
  "container-color-secondary": {
    backgroundColor: theme.colors.secondary,
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
    color: theme.colors.primary,
  },
  "text-color-outline-secondary": {
    color: theme.colors.secondary,
  },
  "text-color-outline-tertiary": {
    color: "#808080",
  },
});
