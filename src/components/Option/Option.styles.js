import styled from "styled-components/macro";

export const Container = styled.div`
  text-transform: capitalize;
  background: ${({ isActive }) =>
    isActive ? "var(--primary-color)" : "transparent"};
  color: ${({ isActive }) =>
    !isActive ? "var(--text-white)" : "var(--text-dark)"};
  padding: 0.5rem 1.5rem;
  font-size: 1.5rem;
  line-height: 1.5;
  border-radius: 0.2rem;
  text-align: center;
  width: ${({ width }) => (width ? width : "18rem")};

  border: 1px solid var(--primary-color);
  transition: all 0.3s;
  cursor: pointer;

  &:hover {
    color: var(--text-dark);
    background: var(--primary-color);
  }
`;
