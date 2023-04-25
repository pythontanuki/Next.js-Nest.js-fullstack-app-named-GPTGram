import SideBar from "@/components/SideBar";
import Timeline from "@/components/Timeline";
import { AccountBar } from "@/components/AccountBar";
import { Flex, HStack, Avatar, Box, VStack } from "@chakra-ui/react";
import Widgets from "@/components/Widgets ";

const Home = () => {
  return (
    <Flex>
      <SideBar />
      <Timeline />
      <Widgets />
    </Flex>
  );
};

export default Home;
