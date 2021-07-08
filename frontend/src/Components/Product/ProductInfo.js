import {
  SimpleGrid,
  Box,
  Flex,
  Stack,
  Icon,
  useColorModeValue,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from '@chakra-ui/react';
import ProductInfoCardItem from './ProductInfoCardItem';
// import {
//   IoAnalyticsSharp,
//   IoLogoBitcoin,
//   IoSearchSharp,
// } from 'react-icons/io5';

const Feature = ({ text, icon, iconBg, textInfo }) => {
  return (
    <Stack direction={'row'} align={'center'}>
      {/* <Flex
        w={8}
        h={8}
        align={'center'}
        justify={'center'}
        rounded={'full'}
        bg={iconBg}
      >
        {icon}
      </Flex> */}
      <Box w="100%">
        <Accordion allowToggle allowMultiple defaultIndex={[0]}>
          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box flex="1" textAlign="left">
                  {text}
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>{textInfo}</AccordionPanel>
          </AccordionItem>
        </Accordion>
      </Box>
    </Stack>
  );
};

const ProductInfo = ({ textInfo }) => {
  return (
    <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
      <Stack>
        <Stack spacing={4}>
          <Feature
            icon={<Icon color={'yellow.500'} w={5} h={5} />}
            iconBg={useColorModeValue('yellow.100', 'yellow.900')}
            text={'Details'}
            textInfo={textInfo}
          />
          <Feature
            icon={<Icon color={'green.500'} w={5} h={5} />}
            iconBg={useColorModeValue('green.100', 'green.900')}
            text={'Delivery'}
          />
          <Feature
            icon={<Icon color={'purple.500'} w={5} h={5} />}
            iconBg={useColorModeValue('purple.100', 'purple.900')}
            text={'Return'}
          />
        </Stack>
      </Stack>
      <Flex>
        <ProductInfoCardItem />
      </Flex>
    </SimpleGrid>
  );
};

export default ProductInfo;
