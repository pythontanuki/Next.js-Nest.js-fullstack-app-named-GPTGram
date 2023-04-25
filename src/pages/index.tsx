import SideBar from "@/components/SideBar";
import { Flex, HStack, Avatar, Box, VStack } from "@chakra-ui/react";
import { IoIosArrowForward } from "react-icons/io";
import { Post } from "@/components/Post";

const Home = () => {
  return (
    <>
      <Flex>
        <SideBar />
        <IoIosArrowForward />
        <VStack>
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
          <Box>
            <Post
              avatarImage={{ id: 1, url: "" }}
              displayName="taichi"
              postImage={{ id: 1, url: "messi_kissShoes.jpeg" }}
              commentByPostOwner="Imada is Superb."
              representativeUserNameOfLikes="minagawa"
              representativeAvatarOfLikes={{
                id: 1,
                url: "messi_kissShoes.jpeg",
              }}
              representativeUserNameOfComments_first="hamada"
              representativeCommentContent_first="so good!!"
              representativeUserNameOfComments_second="watanabe"
              representativeCommentContent_second="so bad!!"
              commentAmount="10万"
              postedAt="ちょっと前"
            />
          </Box>
        </VStack>
      </Flex>
    </>
  );
};

export default Home;
