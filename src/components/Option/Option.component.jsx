import React from "react";

import * as S from "./Option.styles";

const Option = ({
  handleOnClick,
  index,
  isActive,
  width,

  children,
}) => {
  return (
    <S.Container
      width={width}
      isActive={isActive}
      onClick={() => handleOnClick(index)}
    >
      {children}
    </S.Container>
  );
};

export default Option;
