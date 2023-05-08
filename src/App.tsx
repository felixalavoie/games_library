import { useState } from "react";
import { Box, Flex, Grid, GridItem, HStack, Show } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { Genre } from "./hooks/useGenres";
import PlatformSelect from "./components/PlatformSelect";
import { Platform } from "./hooks/usePlatforms";
import SortSelect from "./components/SortSelect";

export interface GameQuery {
  genre: Genre | null;
  platform: Platform | null;
  sortType: string;
  search: string | null;
}

function App() {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);

  return (
    <>
      <Grid
        templateAreas={{
          base: `"nav" "main"`,
          lg: `"nav nav" "aside main"`,
        }}
        templateColumns={{
          base: "1fr",
          lg: "250px 1fr",
        }}
      >
        <GridItem area="nav">
          <Navbar
            searchFunction={(search) => setGameQuery({ ...gameQuery, search })}
          />
        </GridItem>

        <Show above="lg">
          <GridItem area="aside" paddingLeft="18px">
            <GenreList
              selectedGenre={gameQuery.genre}
              onSelectGenre={(genre) => {
                setGameQuery({ ...gameQuery, genre });
              }}
            />
          </GridItem>
        </Show>

        <GridItem area="main" paddingX={10}>
          <Flex>
            <PlatformSelect
              selectedPlatform={gameQuery.platform}
              onSelectPlatform={(platform) => {
                setGameQuery({ ...gameQuery, platform });
              }}
            />
            <Box marginLeft={5}>
              <SortSelect
                selectedSort={gameQuery.sortType}
                onSelect={(sortType) =>
                  setGameQuery({ ...gameQuery, sortType })
                }
              />
            </Box>
          </Flex>

          <GameGrid gameQuery={gameQuery} />
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
