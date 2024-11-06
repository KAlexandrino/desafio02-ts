import { Flex } from "@chakra-ui/react";
import Logo from "./Logo";
import MenuOptions from "./MenuOptions";

const Header: React.FC = () => {
  return (
    <Flex as="header" bg="black" p={4} justify="space-between" align="center">
      <Logo />
      <MenuOptions />
    </Flex>
  )
}

export default Header;