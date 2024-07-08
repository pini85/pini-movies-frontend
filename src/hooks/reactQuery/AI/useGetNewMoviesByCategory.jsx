import { useMutation, useQueryClient } from 'react-query';

import { getNewMoviesByCategory } from 'apis/constants.ts';
const useGetNewMoviesByCategories = (categoryName) => {
  const queryClient = useQueryClient();

  const { data, mutate, isError, error, isLoading } = useMutation({
    mutationFn: () => getNewMoviesByCategory(categoryName),
    onSuccess: () => {
      queryClient.invalidateQueries(['ai-movies-by-category', categoryName]);
    },
  });

  return { mutate, isError, error, isLoading };
};
export default useGetNewMoviesByCategories;
