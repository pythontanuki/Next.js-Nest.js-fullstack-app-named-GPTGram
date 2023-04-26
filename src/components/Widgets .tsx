import { AccountBar } from "@/components/AccountBar";
import { VStack, Flex, Text, Button } from "@chakra-ui/react";

const Widgets = () => {
  return (
    <VStack ml={"50px"}>
      <AccountBar
        accountImage={{ id: 1, url: "Mbappe.jpeg" }}
        userName="taichi_130710"
        displayName="あらきたいち"
      />
      <Flex justify={"space-between"} w={"100%"}>
        <Text fontWeight={"bold"} color={"gray"}>
          おすすめ
        </Text>
        <Text fontWeight={"bold"}>すべて見る</Text>
      </Flex>
      <AccountBar
        accountImage={{ id: 2, url: "Mbappe.jpeg" }}
        userName="imada_130710"
        displayName="いまだかける"
      />
      <AccountBar
        accountImage={{ id: 3, url: "Mbappe.jpeg" }}
        userName="minagawa_130710"
        displayName="みながわけい"
      />
      <AccountBar
        accountImage={{ id: 4, url: "Mbappe.jpeg" }}
        userName="nagari_130710"
        displayName="ながさきりお"
      />
    </VStack>
  );
};

export default Widgets;
