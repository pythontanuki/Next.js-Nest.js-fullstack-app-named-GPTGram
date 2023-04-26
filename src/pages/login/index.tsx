import { useSession, signIn, signOut } from "next-auth/react";
import Home from "..";
import { Button, VStack, Text } from "@chakra-ui/react";

import type React from "react";

const Login: React.FC = () => {
  const { data: session, status } = useSession();

  if (status === "loading") {
    return null;
  }

  if (session) {
    return (
      <>
        <Text color={"gray.400"} fontFamily={"Anonymous Pro"}>
          You are signed as {session.user?.email}
        </Text>
        <Button
          color={"white"}
          px={"45px"}
          py={"10px"}
          borderRadius={"full"}
          bg={"deepskyblue"}
          onClick={() => signOut()}
          fontFamily={"Anonymous Pro"}
        >
          Logout
        </Button>
        <Home />
      </>
    );
  }

  return (
    <VStack display={"Flex"} h={"600px"} justify="center">
      <Text
        color={"deepskyblue"}
        fontWeight={"bold"}
        fontSize={"65px"}
        fontFamily={"Anonymous Pro"}
        mb={"10px"}
      >
        Would you like to join the GPTGram Member ?
      </Text>
      <Button
        color={"white"}
        fontSize={"40px"}
        fontFamily={"Anonymous Pro"}
        px={"45px"}
        py={"10px"}
        borderRadius={"full"}
        bg={"deepskyblue"}
        onClick={() => signIn()}
      >
        Login
      </Button>
    </VStack>
  );
};
export default Login;
