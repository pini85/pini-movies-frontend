import styled from "styled-components/macro";

export const CardInner = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;

  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
`;
export const CardContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  font-size: 1.6rem;

  margin: 0 2rem 2rem 2rem;
  width: 35rem;
  height: 45rem;
  margin-bottom: 3.5rem;
`;

export const CardFront = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  font-weight: 700;
  color: var(--text-white);
  background: ${(props) => `url(${props.image()})no-repeat center center`};
  background-size: cover;
  color: var(--text-dark);
  font-weight: 300;
`;

//image.tmdb.org/t/p/w185//${props.movie.poster_path
export const Year = styled.div`
  position: absolute;
  top: 5px;
  left: 5px;
  background-color: var(--primary-color);
  border-radius: 5px;
  padding: 0 5px;
`;
export const Rating = styled.div`
  display: flex;
  position: absolute;
  top: 5px;
  right: 5px;
  background-color: var(--primary-color);
  border-radius: 5px;
  padding: 0 5px;
`;

export const TitleFront = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  background-color: var(--primary-color);
  color: var(--text-dark);
  padding: 0 5px;
`;

export const IconWrapper = styled.div`
  margin-right: 5px;
  color: orange;
`;

export const Gradient = styled.div`
  height: 150%;
  width: 100%;
  background: linear-gradient(
    to bottom,
    rgba(177, 231, 231, 0.7) 0%,
    rgba(177, 231, 231, 0.7) 100%
  );
`;

export const ButtonContainer = styled.div`
  outline: none;
  display: flex;
  flex-direction: column;
  gap: 20px;
  height: 100%;
  justify-content: center;
  align-items: center;
`;
