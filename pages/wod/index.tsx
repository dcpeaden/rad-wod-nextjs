import { ChakraProvider, Text } from "@chakra-ui/react"
import Navbar from "../../components/templates/navbar";
import TwoColWithImageComponent from "../../components/templates/two-columns-with-image";

const WodLandingPage = () => {
  return (
    <ChakraProvider>
      <Navbar />
      <TwoColWithImageComponent />
    </ChakraProvider>
  );
};

export default WodLandingPage;
