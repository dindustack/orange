import { Link } from 'react-router-dom';
import Ratings from '../Ratings';
import {
  Flex,
  Center,
  Box,
  Image,
  useColorModeValue,
  Icon,
  chakra,
  Tooltip,
} from '@chakra-ui/react';
import { FiShoppingCart } from 'react-icons/fi';

const IMAGE =
  'https://images.unsplash.com/photo-1518051870910-a46e30d9db16?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80';

const ProductItem = ({ product }) => {
  return (
    <>
      <Center py={12}>
        <Box
          role={'group'}
          p={6}
          maxW={'330px'}
          w={'full'}
          bg={useColorModeValue('white', 'gray.800')}
          boxShadow={'2xl'}
          rounded={'lg'}
          pos={'relative'}
          zIndex={1}
        >
          <Link to={`/product/${product._id}`} key={product._id}>
            <Box
              rounded={'lg'}
              mt={-12}
              pos={'relative'}
              height={'230px'}
              isTruncated
              _after={{
                transition: 'all .3s ease',
                content: '""',
                w: 'full',
                h: 'full',
                pos: 'absolute',
                top: 5,
                left: 0,
                backgroundImage: `url(${IMAGE})`,
                filter: 'blur(15px)',
                zIndex: -1,
              }}
              _groupHover={{
                _after: {
                  filter: 'blur(20px)',
                },
              }}
            >
              <Image
                rounded={'lg'}
                height={230}
                width={282}
                objectFit={'cover'}
                src={IMAGE}
              />
            </Box>
          </Link>
          <Box>
            <Flex mt="1" justifyContent="space-between" alignContent="center">
              <Tooltip
                label={product.name}
                bg="white"
                placement={'top'}
                color={'gray.800'}
                fontSize={'1.2em'}
              >
                <Box
                  fontSize="xl"
                  fontWeight="semibold"
                  as="h4"
                  lineHeight="tight"
                  isTruncated
                >
                  {product.name}
                </Box>
              </Tooltip>

              <Tooltip
                label="Add to cart"
                bg="white"
                placement={'top'}
                color={'gray.800'}
                fontSize={'1.2em'}
              >
                <chakra.a href={'#'} display={'flex'}>
                  <Icon as={FiShoppingCart} h={7} w={7} alignSelf={'center'} />
                </chakra.a>
              </Tooltip>
            </Flex>

            <Flex justifyContent="space-between" alignContent="center">
              <Ratings
                rating={product.rating}
                numReviews={product.numOfReviews}
              />
              <Box
                fontSize="2xl"
                color={useColorModeValue('gray.800', 'white')}
              >
                <Box as="span" color={'gray.600'} fontSize="lg">
                  £
                </Box>
                {product.price.toFixed(2)}
              </Box>
            </Flex>
          </Box>
        </Box>
      </Center>
    </>
  );
};

export default ProductItem;
