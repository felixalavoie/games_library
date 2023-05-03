import { HStack, Image, Text } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import ThemeSwitch from "./ThemeSwitch";

const Navbar = () => {
  return (
    <HStack>
      <Image src={logo} boxSize="60px" />
      <ThemeSwitch />
    </HStack>
  );
};

export default Navbar;
