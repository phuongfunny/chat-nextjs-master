import { Flex } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import Loading from "../components/Loading";
import SideBar from "../components/SideBar";
import { auth } from "../firebase.config";

const Layout = ({ children }: any) => {
  const [user, loading] = useAuthState(auth);

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
        {children}
      </Flex>
    </Flex>
  );
};

export default Layout;
