import { ChakraProvider } from "@chakra-ui/react";
import { NextPage } from "next";
import SignUpComponent from "../../components/templates/sign-up-component";

const SignUpPageComponent: NextPage = () => {
  return (
    <ChakraProvider>
      <SignUpComponent />
    </ChakraProvider>
  );
};

export default SignUpPageComponent;