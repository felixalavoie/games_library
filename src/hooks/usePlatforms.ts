import useData from "./useData";

export interface Platform {
  id: number;
  name: string;
  slug: string;
  image: string;
  games_count: number;
}

const usePlatforms = () => useData<Platform>("/platforms/lists/parents");

export default usePlatforms;
