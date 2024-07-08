import { queryOptions, useQuery } from "@tanstack/react-query";
import { getSavedMovies } from "@/apis/constants";

const useSavedMovies = (userId) => {
  const getSavedMoviesQuery = () => {
    return queryOptions({
      queryKey: ["saved-movies", userId],
      queryFn: () => getSavedMovies(userId),
      enabled: !!userId,
    });
  };

  const { data: savedMovies, isLoading } = useQuery(getSavedMoviesQuery());

  return { savedMovies, isLoading };
};

export default useSavedMovies;
