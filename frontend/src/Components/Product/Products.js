import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from '../../Redux/actions/productActions';
import Product from './ProductItem';
import { Box, Center, Stack, Heading, SimpleGrid } from '@chakra-ui/react';
import { Alert, AlertIcon, CircularProgress } from '@chakra-ui/react';
import { CloseButton } from '@chakra-ui/react';
import ProductFilter from './ProductFilter';

function ProductAddToCart() {
  const dispatch = useDispatch();
  const { loading, products, error, productsCount } = useSelector(
    state => state.products
  );

  useEffect(() => {
    if (error) {
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
        <CircularProgress isIndeterminate color="green.300" />
      ) : (
        <Box as="section">
          <Box
            py={{ base: '64px', md: '80px' }}
            px={{ base: '24px', md: '40px' }}
            width={{ base: 'auto' }}
            // maxWidth="1200px"
            mx="auto"
          >
            <Stack>
              <Heading
                textTransform="capitalize"
                textAlign="center"
                fontSize={{ base: '2xl', md: '4xl' }}
                color={'gray.800'}
              >
                popular gift collections
              </Heading>
            </Stack>

            <Box maxW="7xl" mx={'auto'} pt={5} px={{ base: 2 }}>
              <Center>
                <SimpleGrid
                  columns={{ md: 3, lg: 4, xl: 5 }}
                  spacing={{ base: 5, lg: 8 }}
                >
                  <ProductFilter title={"New Gift's"} />
                  <ProductFilter title={"Top Rated Gift's"} />
                  <ProductFilter title={"Trending Gift's"} />
                  <ProductFilter title={"Best Offer Gift's"} />
                </SimpleGrid>
              </Center>
            </Box>

            <SimpleGrid
              mt={{ base: '64px', md: '80px' }}
              columns={{ base: 1, md: 2, lg: 3 }}
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
