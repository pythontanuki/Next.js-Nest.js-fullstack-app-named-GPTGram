import { Text } from "@chakra-ui/react";
import React from "react";

type Props = {
  title: string;
};

export const SideBarText: React.FC<Props> = ({ title }) => {
  return (
    <Text
      fontWeight={"normal"}
      fontSize={"16px"}
      lineHeight={"100%"}
      letterSpacing={"normal"}
    >
      {title}
    </Text>
  );
};
