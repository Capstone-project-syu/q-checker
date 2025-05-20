import Animated from "react-native-reanimated";
import { FlexProps } from "./Flex.type";

/**
 * @description Flex를 이용해 컴포넌트를 배치할 때 사용하는 컴포넌트
 */
export const Flex: React.FC<FlexProps> = (props) => {
  const {
    flexDirection = "column",
    justifyContent,
    alignItems,
    style,
    flex,
    gap,
    ...rests
  } = props;

  return (
    <Animated.View
      style={[
        {
          flexDirection,
          justifyContent,
          alignItems,
          flex,
          gap,
        },
        style,
      ]}
      {...rests}
    />
  );
};
