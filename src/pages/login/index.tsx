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
        <Text color={"gray.400"}>You are signed as {session.user?.email}</Text>
        <Button
          color={"white"}
          px={"45px"}
          py={"10px"}
          borderRadius={"full"}
          bg={"deepskyblue"}
          onClick={() => signOut()}
        >
          Logout
        </Button>
        <Home />
      </>
    );
  }

  return (
    <VStack>
      <Text mt={"20px"}>Would you like to join the GPTGram Member ?</Text>
      <Button
        color={"white"}
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
