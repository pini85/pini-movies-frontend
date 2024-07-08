import React from 'react';
import * as S from './CategoryTitle.styles';
import { CategoryTitleProps } from './CategoryTitle.types';

const CategoryTitle: React.FC<CategoryTitleProps> = ({ title }) => {
  const firstLetter = title.charAt(0).toUpperCase();
  const restOfTitle = title.slice(1);
  return (
    <S.Container>
      <S.FirstLetter>{firstLetter}</S.FirstLetter>
      <S.RestOfTitle>{restOfTitle}</S.RestOfTitle>
    </S.Container>
  );
};

export default CategoryTitle;
