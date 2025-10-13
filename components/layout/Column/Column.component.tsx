import { Flex } from "../Flex";
import { ColumnProps } from "./Column.type";

export const Column: React.FC<ColumnProps> = (props) => {
  const { gap, ...rests } = props;

  return <Flex flexDirection="column" gap={gap} {...rests} />;
};
