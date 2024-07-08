import styled from "styled-components/macro";
export const Container = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
  justify-content: ${({ justify }) => justify};
`;
