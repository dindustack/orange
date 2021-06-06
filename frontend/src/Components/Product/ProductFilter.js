import {
  Box,
  Flex,
  Stat,
  StatLabel,
  useColorModeValue,
} from '@chakra-ui/react';

const ProductFilter = ({ title }) => {
  return (
    <Stat
      py={'3'}
      px={'3'}
      size={'2xl'}
      shadow={'xl'}
      border={'1px solid'}
      borderColor={useColorModeValue('gray.800', 'gray.500')}
      rounded={'2xl'}
    >
      <Flex justifyContent={'center'}>
        <Box>
          <StatLabel fontSize={'md'} fontWeight={'medium'} isTruncated>
            {title}
          </StatLabel>
        </Box>
      </Flex>
    </Stat>
  );
};

export default ProductFilter;
