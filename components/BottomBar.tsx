import {
  Avatar,
  Button,
  Flex,
  FormControl,
  Heading,
  Input,
  Text,
} from "@chakra-ui/react";

export interface IBottomBarProps {}

export default function BottomBar(props: IBottomBarProps) {
  return (
    <FormControl
      _hover={{ bg: "gray.100", cursor: "pointer" }}
      height={"81px"}
      p={3}
      w="full"
    >
      <Input placeholder="Type a message..." />
      <Button hidden type="submit">
        Send
      </Button>
    </FormControl>
  );
}
