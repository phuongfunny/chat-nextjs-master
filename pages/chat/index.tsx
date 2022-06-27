import { Flex, Text } from "@chakra-ui/react";
import type { NextPage } from "next";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import BottomBar from "../../components/BottomBar";
import Loading from "../../components/Loading";
import SideBar from "../../components/SideBar";
import TopBar from "../../components/TopBar";
import { auth } from "../../firebase.config";

const ChatPage: NextPage = () => {
  const [user, loading, error] = useAuthState(auth);
  const router = useRouter();

  useEffect(() => {
    if (!user && !loading) {
      router.push("/login");
      localStorage.clear();
    }
  }, [user]);

  if (loading) return <Loading />;

  return (
    <Flex h={"100vh"} w="full">
      <SideBar
        nameUser={user?.displayName ? user.displayName : ""}
        avatar={user?.photoURL ? user.photoURL : ""}
      />
      <Flex flex={1} direction="column">
        <TopBar email="Con ga Quang De" />
        <Flex flex={1} direction="column" p={5}>
          <Flex
            bg={"green.300"}
            w="fit-content"
            minWidth={"100px"}
            borderRadius={"lg"}
            mb="2"
            p={2}
          >
            <Text>This is a dunmy message</Text>
          </Flex>
          <Flex
            bg={"green.300"}
            w="fit-content"
            minWidth={"100px"}
            borderRadius={"lg"}
            mb="2"
            p={2}
          >
            <Text>This is a dunmy message</Text>
          </Flex>
          <Flex
            bg={"gray.300"}
            w="fit-content"
            minWidth={"100px"}
            borderRadius={"lg"}
            p={2}
            alignSelf="end"
          >
            <Text>This is a dunmy message</Text>
          </Flex>
        </Flex>
        <BottomBar />
      </Flex>
    </Flex>
  );
};

export default ChatPage;
