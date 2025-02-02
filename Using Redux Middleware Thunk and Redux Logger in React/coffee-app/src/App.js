// src/App.js
import React, { useState } from 'react';
import { ChakraProvider, Box, Flex } from '@chakra-ui/react';
import { Provider } from 'react-redux';
import store from './redux/store';
import CoffeeList from './components/CoffeeList';
import Sidebar from './components/Sidebar';

function App() {
  const [sortOrder, setSortOrder] = useState('');

  return (
    <Provider store={store}>
      <ChakraProvider>
        <Flex>
          <Box width="20%">
            <Sidebar setSortOrder={setSortOrder} />
          </Box>
          <Box width="80%">
            <CoffeeList sortOrder={sortOrder} />
          </Box>
        </Flex>
      </ChakraProvider>
    </Provider>
  );
}

export default App;
