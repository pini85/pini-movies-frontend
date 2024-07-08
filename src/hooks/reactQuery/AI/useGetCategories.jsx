import { useQuery } from 'react-query';
import { getMovieCategories } from 'apis/constants.ts';
const useGetMovieCategories = () => {
  const { data, isLoading, isFetching, isError } = useQuery(
    'ai-movie-categories',
    getMovieCategories
  );

  return { data: data?.data, isLoading, isFetching, isError };
};
export default useGetMovieCategories;
