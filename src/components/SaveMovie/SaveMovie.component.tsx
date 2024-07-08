import { useEffect, useState, FC } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/configureStore";
import { useMutation, useQueryClient } from "react-query";
import { saveMovie, removeSavedMovie } from "../../../src/apis/constants";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import * as S from "./SaveMovie.styles";

type Props = {
  isSaved: boolean;
  movie: any;
  id?: number;
};
const SaveMovie: FC<Props> = ({ isSaved, movie, id }) => {
  const queryClient = useQueryClient();
  const [saved, setSaved] = useState(false);
  const user = useSelector((state: RootState) => state.user?.user);

  const saveMovieMutation = useMutation((movie) => saveMovie(movie), {
    onSuccess: () => queryClient.invalidateQueries("saved-movies", user._id),
  });
  const removeMovieMutation = useMutation(
    (id: string) => removeSavedMovie(id),
    {
      onSuccess: () => queryClient.invalidateQueries("saved-movies", user._id),
    }
  );

  useEffect(() => {
    setSaved(isSaved);
  }, []);

  const handleClick = async () => {
    if (saved) {
      const movieId = movie.id ?? Number(id);
      removeMovieMutation.mutate(movieId);
      return setSaved(false);
    }
    const movieObj: any = {
      poster_path: movie.poster_path ?? movie.poster,
      vote_average: movie.vote_average ?? movie.tmdbRating,
      release_date: movie.release_date ?? movie.year,
      title: movie.title,
      id: movie.id ?? id,
    };
    // const data = await axios.post(`/api/${user._id}/movies/add`, { movieObj });
    saveMovieMutation.mutate(movieObj);
    return setSaved(true);
  };

  return (
    <S.Container>
      {/* {user && ( */}
      <S.Button aria-label="save" onClick={handleClick}>
        <S.StyledFontAwesomeIcon icon={faHeart} saved={saved?.toString()} />
      </S.Button>
      {/* )} */}
    </S.Container>
  );
};

export default SaveMovie;
