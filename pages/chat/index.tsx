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
  const [user, loading] = useAuthState(auth);

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
      <Flex
        bg={"green.300"}
        w="100%"
        minWidth={"100px"}
        borderRadius={"lg"}
        alignItems={"center"}
        justifyContent="center"
        mb="2"
        p={2}
      >
        <Text>Select a message!</Text>
      </Flex>
    </Layout>
  );
};

export default ChatPage;
