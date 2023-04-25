import SideBar from "@/components/SideBar";
import Timeline from "@/components/Timeline";
import { AccountBar } from "@/components/AccountBar";
import { Flex, HStack, Avatar, Box, VStack } from "@chakra-ui/react";

const Home = () => {
  return (
    <Flex>
      <SideBar />
      <Timeline />
      <VStack>
        <AccountBar
          accountImage={{ id: 1, url: "Mbappe.jpeg" }}
          userName="taichi_130710"
          displayName="あらきたいち"
        />
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
          accountImage={{ id: 3, url: "Mbappe.jpeg" }}
          userName="nagari_130710"
          displayName="ながさきりお"
        />
      </VStack>
    </Flex>
  );
};

export default Home;
