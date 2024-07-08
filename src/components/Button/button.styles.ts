import styled from "styled-components";
type Props = {
  padding?: string;
  width?: string;
  height?: string;
  opacity?: number;
  margin?: string;
};
export const ButtonContainer = styled.button<Props>`
  text-transform: capitalize;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${({ padding }) => (padding ? padding : "1rem 2.5rem")};
  margin: ${(props) => props.margin && props.margin};
  width: ${(props) => props.width && props.width};
  height: ${(props) => props.height && props.height};
  background-color: var(--primary-color);
  border: none;
  border-radius: 5px;
  opacity: ${(props) => props.opacity};
  cursor: pointer;
  color: var(--text-dark);
  font-size: 1.5rem;
  font-weight: 700;
  transition: all 0.3s;
  outline: transparent;

  &:hover {
    background-color: var(--primary-color-light);
    transform: translateY(-3px);
  }
`;
