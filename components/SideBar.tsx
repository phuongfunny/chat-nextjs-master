import { ArrowBackIcon } from "@chakra-ui/icons";
import { Avatar, Button, Flex, IconButton, Text } from "@chakra-ui/react";
import { signOut } from "firebase/auth";
import { useRouter } from "next/router";
import * as React from "react";
import { auth } from "../firebase.config";
import ChatItem from "./ChatItem";

export interface ISideBarProps {
  nameUser: string;
  avatar: string;
}

export default function SideBar({ avatar, nameUser }: ISideBarProps) {
  const router = useRouter();
  const handleLogout = () => {
    signOut(auth);
    router.push("/login");
  };
  return (
    <Flex bg={"blue.100"} w="300px" h={"100vh"} direction="column">
      <Flex
        h={"81px"}
        w="100%"
        bg={"blue.300"}
        align="center"
        p="5px"
        justifyContent={"space-between"}
      >
        <Flex align={"center"}>
          <Avatar src={avatar} marginEnd={"5px"} />
          <Text>{nameUser}</Text>
        </Flex>
        <IconButton
          aria-label=""
          size={"sm"}
          onClick={handleLogout}
          isRound
          icon={<ArrowBackIcon />}
        />
      </Flex>
      <Button colorScheme="messenger" m={5} p={4}>
        New message
      </Button>
      <Flex
        overflowY={"scroll"}
        direction="column"
        css={`
          ::-webkit-scrollbar {
            width: 0px;
          }
        `}
      >
        <ChatItem email="vvp@gmail.com" />
      </Flex>
    </Flex>
  );
}
