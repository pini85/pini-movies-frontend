import { useState } from 'react';
import { useMutation, useQueryClient } from 'react-query';
import { useDispatch } from 'react-redux';
import { setCredit } from '../../../redux/slices/user.slice.ts';
import { getNewCategory } from 'apis/constants.ts';
const useGetMovieCategories = () => {
  const dispatch = useDispatch();
  const queryClient = useQueryClient();
  //get error object

  const { mutate, isError, isLoading } = useMutation({
    mutationFn: getNewCategory,

    onSuccess: (data) => {
      dispatch(setCredit(data.data.credit));
      queryClient.invalidateQueries('ai-movie-categories');
    },
  });

  return { mutate, isError, isLoading };
};
export default useGetMovieCategories;
