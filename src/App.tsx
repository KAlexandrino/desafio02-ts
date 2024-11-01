import { 
  Center,
  ChakraProvider,
  Input,
  Box,
  Button
} from '@chakra-ui/react'
import { Layout } from './components/Layout';

function App() {
  return (
    <ChakraProvider>
      <Layout>
        <Box>
          <h1>Faça o login aqui</h1>
        </Box>
        <label htmlFor='emailInput' >
          E-mail
        </label>
        <input id='emailInput' type='email' />

        <label htmlFor='passwordInput' >
          Senha
        </label>
        <input id='passwordInput' type='password' />
        <button>
          Entrar
        </button>
      </Layout>
    </ChakraProvider>
  );
}

export default App;
