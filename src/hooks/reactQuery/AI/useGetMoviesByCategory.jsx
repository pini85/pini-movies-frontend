import { useQuery } from 'react-query';
import { getMoviesByCategory } from '../../../../src/apis/constants';
const useGetMoviesByCategories = (categoryName) => {
  const { data, isLoading, isFetching, isError } = useQuery(
    ['ai-movies-by-category', categoryName],
    () => getMoviesByCategory(categoryName)
  );
  return { data: data?.data, isLoading, isError, isFetching };
};
export default useGetMoviesByCategories;
