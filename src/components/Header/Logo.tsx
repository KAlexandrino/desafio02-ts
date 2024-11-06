import { Heading } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Logo: React.FC = () => {
    return (
        <Link to="/">
            <Heading size="md" color="white">
                DIO BANK
            </Heading>
        </Link>
    )
} 

export default Logo;