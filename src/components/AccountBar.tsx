import { Avatar, Box, Flex, VStack, Text } from "@chakra-ui/react";

type Props = {
  accountImage: {
    id: number;
    url: string;
  };
  userName: string;
  displayName: string;
};

export const AccountBar: React.FC<Props> = ({
  accountImage,
  userName,
  displayName,
}) => {
  return (
    <Flex>
      <Avatar src={accountImage.url} name={`${displayName}'s post`} />
      <VStack>
        <Text>{userName}</Text>
        <Text>{displayName}</Text>
      </VStack>
      <Text>切り替える</Text>
    </Flex>
  );
};
