import {
  Button,
  HStack,
  Image,
  List,
  ListItem,
  Spinner,
  Text,
} from "@chakra-ui/react";
import { Genre } from "../hooks/useGenres";
import useGenres from "../hooks/useGenres";
import { getCroppedImageUrl } from "../services/image-cropping";

interface Props {
  selectedGenre: Genre | null;
  onSelectGenre: (genre: Genre) => void;
}

const GenreList = ({ selectedGenre, onSelectGenre }: Props) => {
  const { data, error, loading } = useGenres();

  return (
    <List>
      {loading && <Spinner />}
      {error && <li>{error}</li>}
      {data.map((genre: Genre) => (
        <ListItem key={genre.id} marginBottom={3}>
          <HStack>
            <Image
              src={getCroppedImageUrl(genre.image_background)}
              boxSize="32px"
              borderRadius={10}
            />
            <Button variant="link" onClick={() => onSelectGenre(genre)}>
              {genre.name}
            </Button>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GenreList;
