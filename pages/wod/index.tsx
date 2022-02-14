import { ChakraProvider, Text } from "@chakra-ui/react"
import Navbar from "../../components/templates/navbar";

const WodLandingPage = () => {
  return (
    <ChakraProvider>
      <Navbar />
      <Text>I actually work!</Text>
    </ChakraProvider>
  );
};

export default WodLandingPage;
