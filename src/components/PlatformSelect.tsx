import {
  Button,
  HStack,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  SkeletonText,
  Text,
} from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import { Platform } from "../hooks/usePlatforms";
import usePlatforms from "../hooks/usePlatforms";

interface Props {
  selectedPlatform: Platform | null;
  onSelectPlatform: (platform: Platform) => void;
}

const PlatformSelect = ({ selectedPlatform, onSelectPlatform }: Props) => {
  const { data, error, loading } = usePlatforms();

  return (
    <HStack>
      <Menu>
        <MenuButton as={Button} rightIcon={<BsChevronDown />}>
          Platform
        </MenuButton>
        <MenuList>
          {data.map((platform) => (
            <MenuItem
              key={platform.id}
              color={
                selectedPlatform?.slug == platform.slug ? "orange" : "white"
              }
              onClick={() => onSelectPlatform(platform)}
            >
              {platform.name}
            </MenuItem>
          ))}
        </MenuList>
      </Menu>
      {selectedPlatform && (
        <Text fontSize="lg" fontWeight="black">
          {selectedPlatform?.name}
        </Text>
      )}
    </HStack>
  );
};

export default PlatformSelect;
