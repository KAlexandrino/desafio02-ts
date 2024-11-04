import { 
  Center,
  ChakraProvider,
  Input,
  Box,
  Button
} from '@chakra-ui/react'

function App() {
  return (
    <ChakraProvider>
      <Box minHeight='100vh' backgroundColor={'#9413dc'} padding={'25px'}>
        <Box backgroundColor={'#FFFFFF'} borderRadius={'25px'} padding={'15px'}>
          <center>
            <h1>Faça o login aqui</h1>
          </center>
          <Input placeholder="email" />
          <Input placeholder="password" />
          <center>
            <Button colorScheme='teal' size='sm' width='100%' marginTop='5px'>
              LOGIN
            </Button>
          </center>
        </Box>
      </Box>
    </ChakraProvider>
  );
}

export default App;
