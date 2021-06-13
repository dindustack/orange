import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Alerts from '../Alerts';
import {
  getProductDetails,
  clearErrors,
} from '../../Redux/actions/productActions';

import {
  Container,
  SimpleGrid,
  Image,
  Flex,
  Heading,
  Text,
  Stack,
  StackDivider,
  useColorModeValue,
  Badge,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
} from '@chakra-ui/react';
import ProductInfo from './ProductInfo';
import MetaData from '../Layout/MetaData';

const ProductDetails = ({ match }) => {
  const dispatch = useDispatch();

  const { product, error } = useSelector(state => state.productDetails);

  useEffect(() => {
    dispatch(getProductDetails(match.params.id));

    if (error) {
      <Alerts status={error} title={error} />;
      dispatch(clearErrors());
    }
  }, [dispatch, error, match.params.id]);

  return (
    <>
      <MetaData title={product.name} />
      <Container maxW={'7xl'} py={12}>
        <Stack spacing={4} mb={{ base: 8, md: 15 }}>
          <Heading
            textTransform={'capitalize'}
            color={useColorModeValue('gray.800', 'white')}
            fontWeight={600}
            p={2}
            alignSelf={'flex-start'}
          >
            {product.name}
          </Heading>
        </Stack>
        <Tabs variant="soft-rounded" defaultIndex={0} isLazy>
          <TabList mb={{ base: 8, md: 20 }}>
            <Tab>General Info</Tab>
            <Tab>Product Details</Tab>
            <Tab>Reviews</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
                <Flex>
                  <Image
                    rounded={'md'}
                    alt={'feature image'}
                    src={
                      'https://images.unsplash.com/photo-1554200876-56c2f25224fa?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
                    }
                  />
                </Flex>
                <Stack spacing={4}>
                  <Badge
                    textTransform={'uppercase'}
                    color={product.stock > 0 ? 'green.400' : 'red.400'}
                    fontWeight={600}
                    fontSize={'sm'}
                    bg={useColorModeValue('blue.50', 'blue.900')}
                    p={2}
                    alignSelf={'flex-start'}
                    rounded={'md'}
                  >
                    {product.stock > 0 ? 'AVAILABLE' : 'Out of Stock'}
                  </Badge>

                  <Heading>A digital Product design agency</Heading>
                  <Text color={'gray.500'} fontSize={'lg'}>
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                    diam nonumy eirmod tempor invidunt ut labore
                  </Text>
                  <Stack
                    spacing={4}
                    divider={
                      <StackDivider
                        borderColor={useColorModeValue('gray.100', 'gray.700')}
                      />
                    }
                  ></Stack>
                </Stack>
              </SimpleGrid>
            </TabPanel>
            <TabPanel>
              <ProductInfo textInfo={product.description} />
            </TabPanel>
            <TabPanel>
              <p>review</p>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Container>
    </>
  );
};

export default ProductDetails;
