import { Box, Image, VStack, Divider, Flex } from "@chakra-ui/react";
import { SideBarText } from "@/components/SideBarText";

const SideBar = () => {
  return (
    <>
      <Box ml={"10px"} h={"100vh"}>
        <Flex justify={"flex-start"}>
          <Box mt={"35px"}>
            <Image
              src={"Instagram_logo.svg.png"}
              alt={"logo img"}
              w={"100px"}
            />
            <VStack
              spacing={"0px"}
              gap={"20px"}
              align={"flex-start"}
              mt={"35px"}
              ml={"10px"}
            >
              <SideBarText title={"ホーム"}></SideBarText>
              <SideBarText title={"検索"}></SideBarText>
              <SideBarText title={"リール動画"}></SideBarText>
              <SideBarText title={"お知らせ"}></SideBarText>
              <SideBarText title={"作成"}></SideBarText>
              <SideBarText title={"プロフィール"}></SideBarText>
            </VStack>
            <Box pos={"absolute"} bottom={"16"} ml={"20px"}>
              <SideBarText title={"その他"}></SideBarText>
            </Box>
          </Box>
          <Divider
            orientation={"vertical"}
            h={"100vh"}
            ml={"140px"}
            border={"1px"}
            borderColor={"gray.400"}
            boxShadow={"base"}
          />
        </Flex>
      </Box>
    </>
  );
};

export default SideBar;
