import { 
  Center,
  ChakraProvider,
  Input,
  Box,
  Button
} from '@chakra-ui/react'
import Header from './Header/Header';
import LoginButton from './Login/LoginButton';
import { login } from '../services/login';

const Card = () => {
  return (
    <ChakraProvider>
      <Header />
      <Box minHeight='100vh' backgroundColor={'gray.600'} padding={'25px'}>
        <Box backgroundColor={'#FFFFFF'} borderRadius={'25px'} padding={'15px'}>
          <center>
            <h1>Faça o login aqui</h1>
          </center>
          <Input placeholder="email" />
          <Input placeholder="password" />
        <LoginButton onClick={login} />
        </Box>
      </Box>
    </ChakraProvider>
  )
}

export default Card;