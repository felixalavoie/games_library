import { HStack, Image, Text } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import ThemeSwitch from "./ThemeSwitch";
import SearchBar from "./SearchBar";

interface Props {
  searchFunction: (searchString: string) => void;
}

const Navbar = ({ searchFunction }: Props) => {
  return (
    <HStack padding="20px 10px">
      <Image src={logo} boxSize="60px" />

      <SearchBar onSubmit={searchFunction} />

      <ThemeSwitch />
    </HStack>
  );
};

export default Navbar;
