import { Avatar, Flex, Text } from "@chakra-ui/react";

export interface IChatItemProps {
  avatar?: string;
  email: string;
}

export default function ChatItem({ email, avatar }: IChatItemProps) {
  return (
    <Flex
      _hover={{ bg: "gray.100", cursor: "pointer" }}
      align="center"
      p={3}
      w="full"
    >
      <Avatar src={avatar || ""} marginEnd={"5px"} />
      <Text>{email}</Text>
    </Flex>
  );
}
