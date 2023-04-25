import { Avatar, Flex, VStack, Text, Button } from "@chakra-ui/react";

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
      <Avatar
        src={accountImage.url}
        name={`${displayName}'s post`}
        h={"50px"}
        w={"50px"}
        mr={"15px"}
      />
      <VStack spacing={"0px"} mr={"30px"}>
        <Text w={"200px"} fontWeight={"bold"}>
          {userName}
        </Text>
        <Text w={"200px"} color={"gray"} fontWeight={"bold"}>
          {displayName}
        </Text>
      </VStack>
      <Button
        color="deepskyblue"
        _hover={{ opacity: 0.8 }}
        fontWeight={"bold"}
        rounded={"full"}
      >
        切り替える
      </Button>
    </Flex>
  );
};
