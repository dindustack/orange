import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navbar from './Components/Layout/Navbar'
import Footer from './Components/Layout/Footer'
import Hero from './Components/Hero'
import Products from './Components/Product/Products'
import ProductDetails from './Components/Product/ProductDetails';
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
        <Router>
          <Navbar />
          <Route path="/" component={Home} exact />
          <Route path="/product/:id" component={ProductDetails} exact />
          <Footer />
        </Router>
      </Box>
    </ChakraProvider>
  );
}

export default App;
