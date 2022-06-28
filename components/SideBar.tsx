import { ArrowBackIcon } from "@chakra-ui/icons";
import { Avatar, Button, Flex, IconButton, Text } from "@chakra-ui/react";
import { signOut } from "firebase/auth";
import { addDoc, collection } from "firebase/firestore";
import { useRouter } from "next/router";
import * as React from "react";
import { useCollection } from "react-firebase-hooks/firestore";
import { auth, db } from "../firebase.config";
import { IChatItem } from "../utils/types";
import ChatItem from "./ChatItem";

export interface ISideBarProps {
  nameUser: string;
  avatar: string;
  email: string;
}

export default function SideBar({ avatar, nameUser, email }: ISideBarProps) {
  const [snapshot, loading, error] = useCollection(collection(db, "chats"));
  const chats = snapshot?.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  })) as IChatItem[];
  const router = useRouter();

  const handleLogout = () => {
    signOut(auth);
    router.push("/login");
  };

  const onClickChatItem = (id: string) => {
    router.push(`/chat/${id}`);
  };

  const chatExisting = (email: any) =>
    chats.some(
      (chat) => chat.users.includes(email) && chat.users.includes(email)
    );

  const createNewChat = async () => {
    const newChat = prompt("Please enter a email new message!");

    if (chatExisting(newChat)) alert("Email is existing!");
    else await addDoc(collection(db, "chats"), { users: [email, newChat] });
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
      <Button colorScheme="messenger" m={5} p={4} onClick={createNewChat}>
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
        {chats?.map(
          (chat) =>
            chat.users?.length >= 2 &&
            chat.users.some((item) => item === email) && (
              <ChatItem
                email={chat.users?.find((item) => item !== email) ?? ""}
                id={chat.id}
                key={chat.id}
                onClickChatItem={onClickChatItem}
              />
            )
        )}
      </Flex>
    </Flex>
  );
}
