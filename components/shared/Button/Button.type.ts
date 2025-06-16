import { TouchableOpacityProps } from "react-native";

type ButtonSize = "sm" | "md" | "lg" | "xl";
type ButtonVariant = "solid" | "outline";
type ButtonColor = "primary" | "secondary" | "tertiary";

export interface ButtonProps extends TouchableOpacityProps {
  size?: ButtonSize;
  variant?: ButtonVariant;
  color?: ButtonColor;
  disabled?: boolean;
  children: React.ReactNode;
}
