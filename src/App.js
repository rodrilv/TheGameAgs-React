import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import Homepage from './components/Homepage';
function App() {
  return (
    <ChakraProvider>
      <Homepage></Homepage>
    </ChakraProvider>
  );
}

export default App;
