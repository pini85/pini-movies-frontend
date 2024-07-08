import styled from "styled-components/macro";
export const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  & > svg {
    color: var(--primary-color);
    height: 10rem;
    margin-bottom: 4rem;
  }
`;
export const SuggestionContainer = styled.div`
  position: absolute;
  width: 100%;
`;
