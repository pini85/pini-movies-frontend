import { useState, useEffect } from 'react';
import * as S from './AIGeneratedMovies.styles.js';
import { useSelector } from 'react-redux';
import useGetMovieCategories from 'hooks/reactQuery/AI/useGetCategories.jsx';
import useGetNewCategory from 'hooks/reactQuery/AI/useGetNewCategory.jsx';
import CategoryTitle from 'components/CategoryTitle/CategoryTitle.component.tsx';
import useGetNewOwnCategory from 'hooks/reactQuery/AI/useGetNewOwnCategory.jsx';
import Button from 'components/Button/Button';
import CategoryCard from './components/CategoryCard/CategoryCard.jsx';
import Film from 'components/Spinners/Film/Film.component.jsx';
import Spin from 'components/Spinners/Spin/Spin.component.jsx';
import SpinnerContainer from 'components/Spinners/SpinnerContainer/SpinnerContainer.jsx';
import Input from 'components/Input/Input.component.jsx';

const AIGeneratedMovies = () => {
  const { user } = useSelector((state) => state.user);

  const [value, setValue] = useState('');
  const [loginMsg, setLoginMsg] = useState(false);
  const [creditMsg, setCreditMsg] = useState(false);
  const [inputMsg, setInputMsg] = useState(false);
  const {
    data: categories,
    isFetching,
    isLoading,
    isError: movieCategoryError,
  } = useGetMovieCategories();
  const {
    mutate: newRandomCategoryMutate,
    isLoading: isNewCategoryLoading,
    isError: aiCategoryError,
  } = useGetNewCategory();
  const {
    mutate: ownCategoryMutation,
    isLoading: isOwnCategoryLoading,
    isError: ownCategoryError,
    data: ownCategoryData,
  } = useGetNewOwnCategory();

  useEffect(() => {
    if (user) setLoginMsg(false);
  }, [user]);

  const handleRandomCategoryClick = () => {
    if (inputMsg) setInputMsg(false);
    if (!user) return setLoginMsg(true);
    if (user && user.credit < 1) return setCreditMsg(true);
    newRandomCategoryMutate();
  };
  const handleOwnCategoryClick = () => {
    if (!user) return setLoginMsg(true);
    if (user && user.credit < 1) return setCreditMsg(true);
    if (value.length < 4) return setInputMsg(true);
    if (inputMsg) setInputMsg(false);
    ownCategoryMutation(value);
  };

  const handleOnChange = (e) => {
    setValue(e.target.value);
  };

  const renderCategories = () => {
    return categories?.map((category, i) => {
      return <CategoryCard key={i} category={category} />;
    });
  };
  const generateInputs = () => {
    const isDisabled = isNewCategoryLoading || isOwnCategoryLoading || isFetching;
    return (
      <S.InputContainer>
        {loginMsg && <S.Error>Must be logged in to generate</S.Error>}
        {creditMsg && <S.Error>Not enough credits</S.Error>}
        {inputMsg && <S.Error>Create a genuine category effort</S.Error>}
        <S.ButtonContainer>
          <Button
            disabled={isDisabled}
            title="generate random category"
            handleClick={handleRandomCategoryClick}
          />
        </S.ButtonContainer>
        <S.ButtonContainer>
          <Input
            type="text"
            placeholder="example: funny movies with a plot twist"
            name="generate your own"
            handleOnChange={handleOnChange}
            value={value}
            width="26rem"
          />
          <Button
            disabled={isDisabled}
            title="generate"
            handleClick={handleOwnCategoryClick}
          />
        </S.ButtonContainer>
      </S.InputContainer>
    );
  };

  if (isLoading) {
    return (
      <SpinnerContainer>
        <Film />
      </SpinnerContainer>
    );
  }

  const loadingSpinner = () => {
    if (isFetching || isNewCategoryLoading || isOwnCategoryLoading) {
      return (
        <S.SpinContainer>
          <Spin />
        </S.SpinContainer>
      );
    }
  };
  const generateErrorMessage = () => {
    console.log(movieCategoryError || aiCategoryError || ownCategoryError);
    const error = movieCategoryError || aiCategoryError || ownCategoryError;
    if (error) {
      return <S.Error>Damn you AI! Sorry, something went wrong. Try again</S.Error>;
    }
  };

  return (
    <>
      <CategoryTitle title="AI Generated Movies" />
      {user && <S.Attention>Credits remaining: {user.credit}</S.Attention>}
      {generateInputs()}
      {generateErrorMessage()}
      <S.Container>
        {loadingSpinner()}
        {renderCategories()}
      </S.Container>
    </>
  );
};
export default AIGeneratedMovies;
