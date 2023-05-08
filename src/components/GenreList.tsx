import { Genre } from "../hooks/useGenres";
import useData from "../hooks/useData";

const GenreList = () => {
  const { data, error, loading } = useData<Genre>("/genres");

  return (
    <ul>
      {error && <li>{error}</li>}
      {data.map((genre) => (
        <li key={genre.id}>{genre.name}</li>
      ))}
    </ul>
  );
};

export default GenreList;
