import { Flex, Text } from "@chakra-ui/react";
import { collection, doc, limit, orderBy, query } from "firebase/firestore";
import type { NextPage } from "next";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import {
  useCollection,
  useCollectionData,
  useDocumentData,
} from "react-firebase-hooks/firestore";
import BottomBar from "../../components/BottomBar";
import Loading from "../../components/Loading";
import SideBar from "../../components/SideBar";
import TopBar from "../../components/TopBar";
import { auth, db } from "../../firebase.config";
import Layout from "../../layout/Layout";

const ChatPage: NextPage = () => {
  const [user] = useAuthState(auth);
  const router = useRouter();
  const { id } = router.query;
  const q = query(collection(db, `chats/${id}/messages`), orderBy("timestamp"));

  const [messages, loading] = useCollectionData(q);
  const [chat] = useDocumentData(doc(db, `chats/${id}`));
  const sender = chat?.users.find((item: string) => item !== user?.email);

  useEffect(() => {
    if (!user) {
      router.push("/login");
      localStorage.clear();
    }
  }, [user]);

  if (loading)
    return (
      <Layout>
        <Loading />
      </Layout>
    );

  return (
    <Layout>
      <TopBar email={sender ?? "No name"} />
      <Flex flex={1} direction="column" p={5}>
        {messages?.map((mess) => (
          <Flex
            bg={mess.sender !== user?.email ? "green.300" : "gray.300"}
            w="fit-content"
            minWidth={"100px"}
            borderRadius={"lg"}
            mb="2"
            p={2}
            key={Math.random()}
            alignSelf={mess.sender !== user?.email ? "start" : "end"}
          >
            <Text>{mess.content}</Text>
          </Flex>
        ))}
      </Flex>
      <BottomBar id={id?.toString() ?? ""} sender={user?.email ?? ""} />
    </Layout>
  );
};

export default ChatPage;
