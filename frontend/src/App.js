import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navbar from './Components/Layout/Navbar'
import Footer from './Components/Layout/Footer'
import Hero from './Components/Hero'
import Products from './Components/Products'
import Home from './Components/Home'
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
          <Products />
          <Footer />
          <Router>
            <Route path='/user' component={Home} exact />
          </Router>
          
        
      </Box>
    </ChakraProvider>
  );
}

export default App;
