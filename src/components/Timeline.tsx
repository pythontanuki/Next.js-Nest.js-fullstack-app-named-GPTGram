import { Flex, HStack, Avatar, Box, VStack } from "@chakra-ui/react";
import { Post } from "@/components/Post";

const Timeline = () => {
  return (
    <>
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
        <VStack spacing={"0px"} gap={"40px"}>
          <Box>
            <Post
              avatarImage={{ id: 1, url: "Mbappe.jpeg" }}
              displayName="taichi"
              postImage={{ id: 2, url: "messi_kissShoes.jpeg" }}
              commentByPostOwner="Imada is Superb."
              representativeUserNameOfLikes="minagawa"
              representativeAvatarOfLikes={{
                id: 3,
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
          <Box>
            <Post
              avatarImage={{ id: 4, url: "Mbappe.jpeg" }}
              displayName="taichi"
              postImage={{ id: 5, url: "messi_kissShoes.jpeg" }}
              commentByPostOwner="Imada is Superb."
              representativeUserNameOfLikes="minagawa"
              representativeAvatarOfLikes={{
                id: 6,
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
      </VStack>
    </>
  );
};

export default Timeline;
