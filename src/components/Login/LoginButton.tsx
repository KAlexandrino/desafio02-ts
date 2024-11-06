import { Button, Center, IconButtonProps } from "@chakra-ui/react"

interface ILoginButton {
    onClick: () => void
}

const login = (): void => {
    alert('Bem vindos!')
}

const LoginButton = ({onClick}: ILoginButton) => {
    return (
        <Center>
            <Button
            size='sm' 
            width='100%' 
            marginTop='5px'
            colorScheme='teal'
            onClick={onClick}
            >
                LOGIN
            </Button>
        </Center>

    )
}

export default LoginButton;