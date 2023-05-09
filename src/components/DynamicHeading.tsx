import { Heading } from "@chakra-ui/react";
import { Genre } from "../hooks/useGenres";
import { Platform } from "../hooks/usePlatforms";

interface Props {
  genre: Genre | null;
  platform: Platform | null;
}

const DynamicHeading = ({ genre, platform }: Props) => {
  return (
    <Heading paddingBottom={4}>
      {platform?.name} {genre?.name} Games
    </Heading>
  );
};

export default DynamicHeading;
