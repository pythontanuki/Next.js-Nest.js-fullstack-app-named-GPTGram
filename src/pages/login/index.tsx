import {
  VStack,
  FormLabel,
  FormControl,
  Input,
  Button,
  Text,
} from "@chakra-ui/react";

const Login = () => {
  return (
    <VStack>
      <Text mt={"20px"}>Would you like to join the GPTGram Member ?</Text>
      <FormControl>
        <FormLabel mt={"20px"} mb={"5px"}>
          Email address
        </FormLabel>
        <Input
          type="email"
          borderWidth={"1px"}
          placeholder="example@example.com"
          h={"50px"}
          w={"400px"}
          borderRadius={"md"}
          mb="20px"
        />
        <FormLabel mb={"5px"}>UserName</FormLabel>
        <Input
          type="text"
          placeholder="UserName"
          borderWidth={"1px"}
          h={"50px"}
          w={"400px"}
          borderRadius={"md"}
          mb="20px"
        />
        <FormLabel mb={"5px"}>Password</FormLabel>
        <Input
          type="text"
          placeholder="More than 7 characters, please."
          h={"50px"}
          w={"400px"}
          borderRadius={"md"}
          borderWidth={"1px"}
          mb="20px"
        ></Input>
      </FormControl>
      <Button
        color={"white"}
        px={"45px"}
        py={"10px"}
        borderRadius={"full"}
        bg={"deepskyblue"}
      >
        Login
      </Button>
    </VStack>
  );
};

export default Login;
