import { FlexStyle, LayoutChangeEvent, ViewProps } from "react-native";
import { AnimatedProps } from "react-native-reanimated";

export type FlexProps = AnimatedProps<ViewProps> & {
  flexDirection?: FlexStyle["flexDirection"];
  alignItems?: FlexStyle["alignItems"];
  justifyContent?: FlexStyle["justifyContent"];
  onLayout?: (event: LayoutChangeEvent) => void;
  flex?: FlexStyle["flex"];
  gap?: number;
};
