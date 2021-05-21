import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from '../../Redux/actions/productActions';
import Product from './ProductItem'
import {
  Box,
  useColorModeValue,
  Icon,
  chakra,
  Stack,
  Heading, 
  Container,
  SimpleGrid,
} from '@chakra-ui/react';
import {
  Alert,
  AlertIcon,
} from '@chakra-ui/react';
import { CloseButton } from '@chakra-ui/react';
import Loader from '../loader/Loader.jsx'



function ProductAddToCart() {
  const dispatch = useDispatch();
  const { loading, products, error, productsCount } = useSelector(
    state => state.products
  );

  useEffect(() => {
    
    if(error) {
      return (
        <Alert status="error">
          <AlertIcon />
          {error}
          <CloseButton position="absolute" right="8px" top="8px" />
        </Alert>
      );
    }

    dispatch(getProducts());

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch, error]);
  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <Box as="section" bg="tomato">
          <Box
            py={{ base: '64px', md: '80px' }}
            px={{ base: '24px', md: '40px' }}
            width={{ base: 'auto' }}
            // maxWidth="1200px"
            mx="auto"
          >
            <Heading
              textTransform="capitalize"
              textAlign="center"
              fontSize={{ base: '2xl', md: '4xl' }}
              color="gray.800"
            >
              gift collection
            </Heading>

            <SimpleGrid
              mt={{ base: '64px', md: '80px' }}
              columns={{ base: 1, md: 3 }}
              spacing="40px"
            >
              {products &&
                products.map(product => (
                  <Product key={product._id} product={product} />
                ))}
            </SimpleGrid>
          </Box>
        </Box>
      )}
    </>
  );
}

export default ProductAddToCart;
