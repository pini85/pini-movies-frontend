import styled, { keyframes, css } from "styled-components/macro";

import { ReactComponent as Skip } from "../../../../assets/skip-icon.svg";

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
  @media (min-width: 1400px) and (max-width: 1450px) and (min-height: 788px) and (max-height: 790px) {
    transform: scale(0.85);
    margin-top: -5rem;
  }
`;
export const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 35rem;
  margin-bottom: 4rem;
`;
export const RotatingSkip = styled(Skip)`
  ${({ startanimation }) =>
    startanimation &&
    css`
      animation: ${rotate} 0.8s ease-in-out;
    `}
`;

export const MovieCardContainer = styled.div`
  display: flex;
  width: 40rem;
  height: 45rem;
  margin-bottom: 4rem;
`;
