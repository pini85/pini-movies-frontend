import styled from "styled-components/macro";

export const CheckboxContainer = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
  justify-content: center;
  /* margin: 10px 0; */
  font-size: 2rem;
  color: var(--text-white);
`;

export const HiddenCheckbox = styled.input.attrs({ type: "checkbox" })`
  position: absolute;
  left: 0;
  opacity: 0.01;
`;

export const StyledCheckbox = styled.label`
  position: relative;
  padding-left: 2.3em;
  font-size: 2rem;
  line-height: 1.7;
  cursor: pointer;
  display: flex;
  align-items: center;
  color: var(--text-white);

  &:before {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    width: 1.4em;
    height: 1.4em;
    border: 1px solid #aaa;
    background: var(--primary-color);
    border-radius: 0.2em;
    box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.1),
      0 0 0 rgba(203, 34, 237, 0.2);
    transition: all 0.275s;
  }

  &:after {
    content: "✕";
    position: absolute;
    top: 0.525em;
    left: 0.18em;
    font-size: 1.375em;
    color: var(--secondary-color);
    line-height: 0;
    transition: all 0.2s;
    opacity: ${({ checked }) => (checked ? 1 : 0)};
    transform: ${({ checked }) =>
      checked ? "scale(1) rotate(0)" : "scale(0) rotate(45deg)"};
  }

  ${HiddenCheckbox}:checked + &::after {
    opacity: 1;
    transform: scale(1) rotate(0);
  }

  ${HiddenCheckbox}:not(:checked) + &::after {
    opacity: 0;
    transform: scale(0) rotate(45deg);
  }

  ${HiddenCheckbox}:disabled + & {
    color: #aaa;
  }

  ${HiddenCheckbox}:disabled + &::before {
    box-shadow: none;
    border-color: #bbb;
    background-color: #e9e9e9;
  }

  ${HiddenCheckbox}:disabled + &::after {
    color: #777;
  }

  ${HiddenCheckbox}:checked:focus + &::before,
  ${HiddenCheckbox}:not(:checked):focus + &::before {
    box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.1),
      0 0 0 6px rgba(203, 34, 237, 0.2);
  }
`;
