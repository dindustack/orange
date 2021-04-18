// import React from 'react';
// import Navbar from './Components/Navbar';
// import {
//   ChakraProvider,
//   Box,
//   Text,
//   Link,
//   VStack,
//   Code,
//   Grid,
//   theme,
// } from '@chakra-ui/react';
// import { Logo } from './Logo';

// function App() {
//   return (
//     <ChakraProvider theme={theme}>
//       <Box textAlign="center" fontSize="xl">
//         <Grid minH="100vh" p={3}>
//           <Navbar />
//           <VStack spacing={8}>
//             <Logo h="40vmin" pointerEvents="none" />
//             <Text>
//               Edit <Code fontSize="xl">src/App.js</Code> and save to reload.
//             </Text>
//             <Link
//               color="teal.500"
//               href="https://chakra-ui.com"
//               fontSize="2xl"
//               target="_blank"
//               rel="noopener noreferrer"
//             >
//               Learn Chakra
//             </Link>
//           </VStack>
//         </Grid>
//       </Box>
//     </ChakraProvider>
//   );
// }

// export default App;

// import React from 'react';
// import { Image, keyframes, usePrefersReducedMotion } from '@chakra-ui/react';
// import logo from './logo.svg';

// const spin = keyframes`
//   from { transform: rotate(0deg); }
//   to { transform: rotate(360deg); }
// `;

// export const Logo = props => {
//   const prefersReducedMotion = usePrefersReducedMotion();

//   const animation = prefersReducedMotion
//     ? undefined
//     : `${spin} infinite 20s linear`;

//   return <Image animation={animation} src={logo} {...props} />;
// };
