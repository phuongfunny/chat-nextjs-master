import { Flex, Text } from "@chakra-ui/react";
import { collection } from "firebase/firestore";
import type { NextPage } from "next";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useCollection } from "react-firebase-hooks/firestore";
import BottomBar from "../../components/BottomBar";
import Loading from "../../components/Loading";
import SideBar from "../../components/SideBar";
import TopBar from "../../components/TopBar";
import { auth, db } from "../../firebase.config";
import Layout from "../../layout/Layout";

const ChatPage: NextPage = () => {
  const [user] = useAuthState(auth);
  const [snapshot, loading, error] = useCollection(collection(db, "chats"));
  const chats = snapshot?.docs.map((doc) => ({ id: doc.id, ...doc.data() }));

  const router = useRouter();

  useEffect(() => {
    if (!user) {
      router.push("/login");
      localStorage.clear();
    }
  }, [user]);

  if (loading) return <Loading />;

  return (
    <Layout>
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
    </Layout>
  );
};

export default ChatPage;
