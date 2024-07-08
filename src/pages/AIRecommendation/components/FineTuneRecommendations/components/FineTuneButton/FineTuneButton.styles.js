import styled from "styled-components/macro";
export const Container = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;

  & > svg {
    height: 6rem;
    width: 6rem;
    fill: var(--primary-color);
    color: var(--primary-color);
    &:hover {
      color: var(--primary-color-light);
      fill: var(--primary-color-light);
    }
  }
`;
