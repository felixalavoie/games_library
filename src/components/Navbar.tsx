import { HStack, Image, Text } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import ThemeSwitch from "./ThemeSwitch";

const Navbar = () => {
  return (
    <HStack justifyContent="space-between" padding="20px 10px">
      <Image src={logo} boxSize="60px" />
      <ThemeSwitch />
    </HStack>
  );
};

export default Navbar;
