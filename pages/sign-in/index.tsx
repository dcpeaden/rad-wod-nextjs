import { ChakraProvider } from "@chakra-ui/react";
import { NextPage } from "next";
import SignInComponent from "../../components/templates/sign-in-component";

const SignInPageComponent: NextPage = () => {
  return (
    <ChakraProvider>
      <SignInComponent />
    </ChakraProvider>
  )
};

export default SignInPageComponent;