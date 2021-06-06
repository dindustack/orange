import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navbar from './Components/Layout/Navbar';
import Footer from './Components/Layout/Footer';
import ProductDetails from './Components/Product/ProductDetails';
import Home from './Components/Home';
import { ChakraProvider, Box } from '@chakra-ui/react';
import theme from './Theme/index';

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
