import { Menu, MenuButton, MenuList, MenuItem, Button } from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons"

const MenuOptions: React.FC = () => {
    return (
        <Menu>
            <MenuButton
            as={Button} 
            rightIcon={<ChevronDownIcon />} 
            variant="outline" 
            color="white"
            bg="black"
            _hover={{bg: "white", color: "black"}}
            _active={{bg: "white", color: "black"}}
            >
                MENU
            </MenuButton>

            <MenuList>
                <MenuItem onClick={() => window.location.href = "/perfil"}> Perfil</MenuItem>
                <MenuItem onClick={() => window.location.href = "/configuracoes"}>Configurações </MenuItem>
                <MenuItem onClick={() => window.location.href = "/ajuda"}>Ajuda</MenuItem>
                <MenuItem onClick={() => alert("Saindo...")}> SAIR </MenuItem>
            </MenuList>
        </Menu>
    )
}

export default MenuOptions;