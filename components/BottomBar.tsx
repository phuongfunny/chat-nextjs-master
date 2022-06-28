import {
  Avatar,
  Button,
  Flex,
  FormControl,
  Heading,
  Input,
  Text,
} from "@chakra-ui/react";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { useState } from "react";
import { db } from "../firebase.config";

export interface IBottomBarProps {
  id: string;
  sender: string;
}

export default function BottomBar({ id, sender }: IBottomBarProps) {
  const [message, setMessage] = useState("");

  const sendMessage = async (e: any) => {
    e.preventDefault();
    if (message !== "") {
      await addDoc(collection(db, `chats/${id}/messages`), {
        content: message,
        sender,
        timestamp: serverTimestamp(),
      });
      setMessage("");
    }
  };
  return (
    <FormControl
      _hover={{ bg: "gray.100", cursor: "pointer" }}
      height={"81px"}
      p={3}
      as="form"
      onSubmit={sendMessage}
      w="full"
    >
      <Input
        placeholder="Type a message..."
        autoComplete="off"
        onChange={(e) => setMessage(e.target.value)}
        value={message}
      />
      <Button hidden type="submit">
        Send
      </Button>
    </FormControl>
  );
}
