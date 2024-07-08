import { useEffect, useState } from "react";
import { useQuery, queryOptions } from "@tanstack/react-query";
import useDebounce from "@/hooks/useDebounce.hooks";
import { tmdbQueryApi, tmdbCastId } from "@/apis/tmdbApi";
const useGetSuggestions = (
  searchQuery,
  showMovies,
  showCast,
  moviesNumber,
  castNumber,
  type
) => {
  const [suggestions, setSuggestions] = useState({});
  const debouncedMovieSearch = useDebounce(searchQuery, 100);
  const debouncedCastSearch = useDebounce(searchQuery, 100);
  const getMovieSearchQuery = () => {
    return queryOptions({
      queryKey: ["movie-search", debouncedMovieSearch],
      queryFn: () => tmdbQueryApi(debouncedMovieSearch, 1),
      enabled:
        !!debouncedMovieSearch && !!showMovies && searchQuery?.length > 0,
    });
  };
  const getCastSearchQuery = () => {
    return queryOptions({
      queryKey: ["casts-search", debouncedCastSearch],
      queryFn: () => tmdbCastId(debouncedCastSearch),
      enabled: !!debouncedCastSearch && !!showCast && searchQuery?.length > 0,
    });
  };
  const { data: movies } = useQuery(getMovieSearchQuery());
  const { data: casts } = useQuery(getCastSearchQuery());
  const removeDuplicates = (castList) => {
    if (!castList) return;
    const uniqueNames = new Set();
    return castList.filter((cast) => {
      if (uniqueNames.has(cast.name.toLowerCase())) {
        return false;
      } else {
        uniqueNames.add(cast.name.toLowerCase());
        return true;
      }
    });
  };

  useEffect(() => {
    if (!movies && !casts) return;

    const castObj = { casts: [] };
    const movieObj = { movies: [] };
    const filterCast = casts?.results.filter((cast) => {
      return cast.known_for_department === type;
    });
    const uniqueFilterCast = removeDuplicates(filterCast);

    uniqueFilterCast?.slice(0, castNumber).forEach((cast) => {
      castObj.casts.push(cast);
    });

    movies?.results.slice(0, moviesNumber).forEach((movie) => {
      movieObj.movies.push(movie);
    });

    setSuggestions({ castObj, movieObj });
  }, [movies, casts]);

  return { suggestions };
};

export default useGetSuggestions;
