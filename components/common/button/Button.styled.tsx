// components/common/Button.styled.tsx
import styled, { css } from "styled-components/native";

export type ButtonSize = "big" | "medium" | "small" | "xsmall";
export type FontSize = "big" | "medium" | "small";
export type ButtonColor = "primary" | "white" | "leave" | "success";

interface StyledButtonProps {
  $buttonSize: ButtonSize;
  $fontSize: FontSize;
  $backgroundColor: ButtonColor;
  disabled?: boolean;
}

const sizeStyles = {
  big: css`
    padding: 14px 24px;
    border-radius: 12px;
  `,
  medium: css`
    padding: 12px 20px;
    border-radius: 10px;
  `,
  small: css`
    padding: 8px 16px;
    border-radius: 8px;
  `,
  xsmall: css`
    padding: 6px 12px;
    border-radius: 6px;
  `,
};

const fontSizeStyles = {
  big: css`
    font-size: 18px;
  `,
  medium: css`
    font-size: 16px;
  `,
  small: css`
    font-size: 14px;
  `,
};

const backgroundStyles: Record<ButtonColor, string> = {
  primary: "#2e8e14",
  white: "#ffffff",
  leave: "#FF3B30",
  success: "#34C759",
};

export const ButtonComponent = styled.TouchableOpacity<StyledButtonProps>`
  ${({ $buttonSize }) => sizeStyles[$buttonSize]}
  background-color: ${({ $backgroundColor, disabled }) =>
    disabled ? "#ccc" : backgroundStyles[$backgroundColor]};
  align-items: center;
  justify-content: center;
`;

export const ButtonText = styled.Text<{
  $fontSize: FontSize;
  $backgroundColor: ButtonColor;
}>`
  ${({ $fontSize }) => fontSizeStyles[$fontSize]}
  font-weight: bold;
  color: ${({ $backgroundColor }) =>
    $backgroundColor === "white" ? "#000" : "#fff"};
`;
