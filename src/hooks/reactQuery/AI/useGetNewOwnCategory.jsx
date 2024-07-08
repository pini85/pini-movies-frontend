import { useMutation, useQueryClient } from 'react-query';
import { getNewOwnCategory } from 'apis/constants.ts';
import { useDispatch } from 'react-redux';
import { setCredit } from '../../../redux/slices/user.slice.ts';
const useGetNewOwnCategory = () => {
  const dispatch = useDispatch();
  const queryClient = useQueryClient();

  const { mutate, isError, isLoading, data } = useMutation({
    mutationFn: getNewOwnCategory,
    onSuccess: (data) => {
      dispatch(setCredit(data.data.credit));
      queryClient.invalidateQueries('ai-movie-categories');
    },
  });

  return { mutate, isError, isLoading, data };
};
export default useGetNewOwnCategory;
