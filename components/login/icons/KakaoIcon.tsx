import React from "react";
import Svg, { Path } from "react-native-svg";

interface Props {
  width?: number;
  height?: number;
}

export const KakaoIcon = ({ width = 24, height = 24 }: Props) => {
  return (
    <Svg width={width} height={height} viewBox="0 0 24 24">
      <Path
        fill="#391B1B"
        d="M12 4c-4.971 0-9 3.185-9 7.115 0 2.558 1.707 4.8 4.27 6.054l-.78 2.93c-.122.489.179.466.36.338L11 17.667c.331.038.664.063 1 .063 4.971 0 9-3.185 9-7.115C21 7.185 16.971 4 12 4z"
      />
    </Svg>
  );
};
