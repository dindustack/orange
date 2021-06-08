import { ReactNode } from 'react';
import {
  Box,
  Flex,
  Heading,
  Text,
  Stack,
  Container,
  Avatar,
  useColorModeValue,
  SimpleGrid,
} from '@chakra-ui/react';

const Feature = ({ children }) => {
  return <Box>{children}</Box>;
};

const FeatureContent = ({ children }) => {
  return (
    <Stack
      bg={useColorModeValue('white', 'gray.800')}
      boxShadow={'lg'}
      p={8}
      rounded={'xl'}
      align={'center'}
      // pos={'relative'}
      _after={{
        content: `""`,
        w: 0,
        h: 0,
        borderLeft: 'solid transparent',
        borderLeftWidth: 16,
        borderRight: 'solid transparent',
        borderRightWidth: 16,
        borderTop: 'solid',
        borderTopWidth: 16,
        borderTopColor: useColorModeValue('white', 'gray.800'),
        // pos: 'absolute',
        bottom: '-16px',
        left: '50%',
        transform: 'translateX(-50%)',
      }}
    >
      {children}
    </Stack>
  );
};

const FeatureHeading = ({ children }) => {
  return (
    <Heading as={'h3'} fontSize={'xl'}>
      {children}
    </Heading>
  );
};

const FeatureText = ({ children }) => {
  return (
    <Text
      textAlign={'center'}
      color={useColorModeValue('gray.600', 'gray.400')}
      fontSize={'sm'}
    >
      {children}
    </Text>
  );
};

function FeatureInfo() {
  return (
    <Box>
      <Container maxW={'7xl'} py={16} as={Stack} spacing={12}>
        <Stack spacing={0} align={'center'}>
          <Heading>How does it Work?</Heading>
        </Stack>
        <SimpleGrid
          columns={{ base: 1, md: 2, lg: 3 }}
          direction={{ base: 'column', md: 'row' }}
          spacing={{ base: 10, md: 4 }}
        >
          <Feature>
            <FeatureContent>
              <FeatureHeading>Choose a gift</FeatureHeading>
              <FeatureText>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor
                neque sed imperdiet nibh lectus feugiat nunc sem.
              </FeatureText>
            </FeatureContent>
          </Feature>
          <Feature>
            <FeatureContent>
              <FeatureHeading>
                Enter delivery details and
                <Text fontFamily={'Gochi Hand'}>add a personalized note</Text>
              </FeatureHeading>
              <FeatureText>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor
                neque sed imperdiet nibh lectus.
              </FeatureText>
            </FeatureContent>
          </Feature>
          <Feature>
            <FeatureContent>
              <FeatureHeading>
                Have it delivered to the doorstep of your loved ones
              </FeatureHeading>
              <FeatureText>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor
                neque.
              </FeatureText>
            </FeatureContent>
          </Feature>
        </SimpleGrid>
      </Container>
    </Box>
  );
}

export default FeatureInfo;
