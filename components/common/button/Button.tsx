// components/common/Button.tsx
import React from "react";
import { GestureResponderEvent } from "react-native";
import {
  ButtonColor,
  ButtonComponent,
  ButtonSize,
  ButtonText,
  FontSize,
} from "./Button.styled";

interface ButtonProps {
  fontSize?: FontSize;
  buttonSize?: ButtonSize;
  backgroundColor?: ButtonColor;
  disabled?: boolean;
  children: React.ReactNode;
  onPress?: (event: GestureResponderEvent) => void;
}

const Button = ({
  fontSize = "medium",
  buttonSize = "medium",
  backgroundColor = "primary",
  disabled = false,
  children,
  onPress,
}: ButtonProps) => {
  return (
    <ButtonComponent
      $fontSize={fontSize}
      $buttonSize={buttonSize}
      $backgroundColor={backgroundColor}
      disabled={disabled}
      onPress={onPress}
    >
      <ButtonText $fontSize={fontSize} $backgroundColor={backgroundColor}>
        {children}
      </ButtonText>
    </ButtonComponent>
  );
};

export default Button;
