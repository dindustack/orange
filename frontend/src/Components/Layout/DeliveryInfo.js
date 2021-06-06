import { Box, Flex, SimpleGrid, useColorModeValue } from '@chakra-ui/react';

function DeliveryCard() {
  return (
    <Flex
      boxShadow={'lg'}
      maxW={'640px'}
      mx={'auto'}
      direction={{ base: 'column-reverse', md: 'row' }}
      width={'full'}
      rounded={'xl'}
      p={10}
      justifyContent={'space-between'}
      position={'relative'}
      bg={useColorModeValue('white', 'gray.800')}
    >
      <Flex
        direction={'column'}
        textAlign={'left'}
        justifyContent={'space-between'}
      ></Flex>
    </Flex>
  );
}

const DeliveryInfo = () => {
  return (
    <Flex
      textAlign={'center'}
      pt={10}
      justifyContent={'center'}
      direction={'column'}
      width={'full'}
    >
      <Box width={{ base: 'full', sm: 'lg', lg: 'xl' }} margin={'auto'}>
        <SimpleGrid
          columns={{ base: 1, xl: 2 }}
          spacing={'20'}
          mt={16}
          mx={'auto'}
        >
          <DeliveryCard />
        </SimpleGrid>
      </Box>
    </Flex>
  );
};

export default DeliveryInfo;
