import { Avatar, background, Flex, Text } from "@chakra-ui/react";
import { useRouter } from "next/router";

export interface IChatItemProps {
  avatar?: string;
  email: string;
  id: string;
  onClickChatItem: Function;
}

export default function ChatItem({
  email,
  avatar,
  id,
  onClickChatItem,
}: IChatItemProps) {
  const router = useRouter();
  return (
    <Flex
      _hover={{ bg: "gray.100", cursor: "pointer" }}
      align="center"
      p={3}
      w="full"
      sx={id === router.query.id ? { background: "gray.100" } : {}}
      onClick={() => onClickChatItem(id)}
    >
      <Avatar src={avatar || ""} marginEnd={"5px"} />
      <Text>{email}</Text>
    </Flex>
  );
}
