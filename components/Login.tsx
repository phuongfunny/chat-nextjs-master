import { ChatIcon } from "@chakra-ui/icons";
import { Box, Button, Center, Stack } from "@chakra-ui/react";

import * as React from "react";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { auth } from "../firebase.config";

export interface ILoginProps {}

export default function Login(props: ILoginProps) {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

  return (
    <>
      <Center h={"100vh"}>
        <Stack
          align={"center"}
          bgColor="WindowFrame"
          p={16}
          rounded={"3xl"}
          spacing={12}
          boxShadow={"lg"}
        >
          <Box
            bg={
              "radial-gradient(circle,rgba(63,94,251,1) 0%, rgba(252,70,107,1) 100%)"
            }
            w="fit-content"
            p={15}
            rounded="20px"
            _hover={{
              background:
                "radial-gradient(circle, rgba(252,70,70,1) 0%, rgba(63,94,251,1) 100%)",
            }}
          >
            <ChatIcon h="100px" w="100px" color={"white"}></ChatIcon>
          </Box>
          <Button colorScheme="whatsapp" onClick={() => signInWithGoogle()}>
            Sign In Google
          </Button>
        </Stack>
      </Center>
    </>
  );
}
