import { Center, ChakraProvider, Spinner } from "@chakra-ui/react";
import * as React from "react";

interface ILoadingProps {}

const Loading: React.FunctionComponent<ILoadingProps> = (props) => {
  return (
    <ChakraProvider>
      <Center h="100vh">
        <Spinner size={"xl"} />
      </Center>
    </ChakraProvider>
  );
};

export default Loading;
