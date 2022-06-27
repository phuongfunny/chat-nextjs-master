import { Avatar, Flex, Heading, Text } from "@chakra-ui/react";

export interface ITopBarProps {
  avatar?: string;
  email: string;
}

export default function TopBar({ email, avatar }: ITopBarProps) {
  return (
    <Flex
      _hover={{ bg: "gray.100", cursor: "pointer" }}
      align="center"
      height={"81px"}
      p={3}
      w="full"
      borderBottom={"1px solid #a7a7a7"}
    >
      <Avatar src={avatar || ""} marginEnd={"5px"} />
      <Heading size={"sm"}>{email}</Heading>
    </Flex>
  );
}
