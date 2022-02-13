import { ChakraProvider } from '@chakra-ui/react'
import type { NextPage } from 'next'
import Navbar from '../components/templates/navbar';
import { PropsType } from '../constants/props-type';
import LandingPage from './landing-page';

const props: PropsType = { 
  headerTopText: "Athletic performance -",
  headerBottomText: "practically optimized!",
  descriptionText: "Rad WOD is the essential performance and functional fitness tracking tool\n- with all the integrations you and your members want\n- and none of them you don't!"
};

const Home: NextPage = () => {
  return (
    <ChakraProvider>
      <Navbar />
      <LandingPage {...props} />
    </ChakraProvider>
  );
}

export default Home;
