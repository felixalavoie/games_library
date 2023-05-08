import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import { Genre } from "../hooks/useGenres";

interface Props {
  selectedGenre: Genre | null;
}

const GameGrid = ({ selectedGenre }: Props) => {
  const { games, error, loading } = useGames(
    {
      params: { genres: selectedGenre?.slug },
    },
    [selectedGenre?.id]
  );
  const skeletons = [1, 2, 3, 4, 5, 6];

  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 5 }}
        spacing={10}
        paddingX={10}
      >
        {loading
          ? skeletons.map((skeleton) => <GameCardSkeleton key={skeleton} />)
          : games.map((game) => <GameCard game={game} key={game.id} />)}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
