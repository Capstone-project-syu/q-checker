import { View } from "react-native";
import { SpaceProps } from "./Space.type";

export const Space: React.FC<SpaceProps> = (props) => {
  const { width = 0, height = 0 } = props;
  return (
    <View
      style={{
        width,
        height,
      }}
    />
  );
};
