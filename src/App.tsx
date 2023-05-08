import { useState } from "react";
import { Grid, GridItem, Show } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { Genre } from "./hooks/useGenres";
import PlatformSelect from "./components/PlatformSelect";
import { Platform } from "./hooks/usePlatforms";

export interface GameQuery {
  genre: Genre | null;
  platform: Platform | null;
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
          <Navbar />
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
          <PlatformSelect
            selectedPlatform={gameQuery.platform}
            onSelectPlatform={(platform) => {
              setGameQuery({ ...gameQuery, platform });
            }}
          />
          <GameGrid gameQuery={gameQuery} />
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
