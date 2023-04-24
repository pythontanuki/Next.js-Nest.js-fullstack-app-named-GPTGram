import SideBar from "@/components/SideBar";
import { Flex, HStack, Avatar, Box } from "@chakra-ui/react";
import { IoIosArrowForward } from "react-icons/io";

const Home = () => {
  return (
    <>
      <Flex>
        <SideBar />
        <IoIosArrowForward />
        <HStack
          ml={"150px"}
          alignItems={"flex-start"}
          border={"1px"}
          borderColor={"gray.300"}
          rounded={"xl"}
          h={"120px"}
          w={"470px"}
          spacing={"0px"}
          gap={"15px"}
          boxShadow={"base"}
          py={"28px"}
          mt={"16px"}
          overflow={"scroll"}
          sx={{
            "::-webkit-scrollbar": {
              display: "none",
            },
          }}
        >
          <Avatar
            name="Kent Dodds"
            src="https://bit.ly/kent-c-dodds"
            w={"65px"}
            h={"65px"}
          />
          <Avatar
            name="Kent Dodds"
            src="https://bit.ly/kent-c-dodds"
            w={"65px"}
            h={"65px"}
          />
          <Avatar
            name="Kent Dodds"
            src="https://bit.ly/kent-c-dodds"
            w={"65px"}
            h={"65px"}
          />
          <Avatar
            name="Kent Dodds"
            src="https://bit.ly/kent-c-dodds"
            w={"65px"}
            h={"65px"}
          />
          <Avatar
            name="Kent Dodds"
            src="https://bit.ly/kent-c-dodds"
            w={"65px"}
            h={"65px"}
          />
          <Avatar
            name="Kent Dodds"
            src="https://bit.ly/kent-c-dodds"
            w={"65px"}
            h={"65px"}
          />
          <Avatar
            name="Kent Dodds"
            src="https://bit.ly/kent-c-dodds"
            w={"65px"}
            h={"65px"}
          />
          <Avatar
            name="Kent Dodds"
            src="https://bit.ly/kent-c-dodds"
            w={"65px"}
            h={"65px"}
          />
        </HStack>
      </Flex>
    </>
  );
};

export default Home;
