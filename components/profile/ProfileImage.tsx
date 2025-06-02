import React from "react";
import Svg, { Path } from "react-native-svg";

interface Props {
  width?: number;
  height?: number;
  color?: string;
}

export const ProfileImage = ({
  width = 100,
  height = 100,
  color = "#2E7D32",
}: Props) => {
  return (
    <Svg width={width} height={height} viewBox="0 0 24 24" fill="none">
      <Path
        d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"
        fill={color}
      />
    </Svg>
  );
};
