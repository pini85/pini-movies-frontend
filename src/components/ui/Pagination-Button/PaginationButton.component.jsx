import React from "react";
import { ButtonContainer } from "./paginationButton.styles";

const PaginationButton = ({ children, next, prev, jump }) => {
  return <ButtonContainer>{children}</ButtonContainer>;
};

export default PaginationButton;
