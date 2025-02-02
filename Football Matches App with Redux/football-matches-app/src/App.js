import React from 'react';
import { Box, Heading } from '@chakra-ui/react';
import FootballMatches from './components/FootballMatches';
import Favorites from './components/Favorites';

const App = () => {
  return (
    <Box p={5}>
      <Heading mb={6}>Football Matches</Heading>
      <FootballMatches />
      <Heading mt={10} mb={6}>Favorites</Heading>
      <Favorites />
    </Box>
  );
};

export default App;
