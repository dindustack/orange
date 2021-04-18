import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import Hero from './Components/Hero'
import {
  ChakraProvider,
  Box,
  theme,
} from '@chakra-ui/react';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Box textAlign="center" fontSize="xl">
       
          
          <Navbar />
          <Hero />
          <Footer />
          
        
      </Box>
    </ChakraProvider>
  );
}

export default App;
