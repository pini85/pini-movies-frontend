import styled from "styled-components/macro";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const CheckBoxContainer = styled.div`
  /* width: 12rem; */
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  padding-bottom: 4rem;
`;

export const AnswersContainer = styled.div`
  display: flex;
  flex-direction: ${(props) => (props.occasionQuestion ? "column" : "row")};
  align-items: ${(props) => (props.occasionQuestion ? "flex-start" : "center")};
  flex-wrap: wrap;
  justify-content: center;
  gap: 3rem;
  margin-bottom: ${(props) => (props.isFinetuneRecommendation ? "" : "5rem")};
`;

export const Header = styled.h2`
  font-size: var(--heading-tertiary);
  font-weight: 700;
  color: var(--text-white);
  text-align: center;
`;
export const StepCount = styled.h3`
  font-size: var(--heading-tertiary);
  font-weight: 300;
  color: var(--text-white);
  text-align: center;
  margin-bottom: 2rem;
`;

export const InputContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  margin-bottom: 10px;
  flex-direction: row-reverse;
`;
export const SelectorContainer = styled.div`
  display: flex;
`;

export const ComponentContainer = styled.div`
  margin: 1rem;
  width: ${(props) => props.movieRecommendation && "90vw"};
`;
export const CastContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  & > svg {
    color: var(--primary-color);
    height: 10rem;
    margin-bottom: 4rem;
  }
`;
