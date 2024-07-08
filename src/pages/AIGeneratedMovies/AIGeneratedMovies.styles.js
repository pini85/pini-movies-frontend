import styled from 'styled-components/macro';
export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  //go to next row
  flex-wrap: wrap;
  padding-bottom: 30px;
`;
export const AddCategoryContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 250px;
  width: 250px;
  border: 1px solid black;
`;
export const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-bottom: 20px;
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
export const SpinContainer = styled.div`
  height: 350px;
  width: 250px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Error = styled.h1`
  text-align: center;
  color: red;
  margin-bottom: 3rem;
`;

export const Attention = styled.h2`
  text-align: center;
  color: var(--text-white);
  margin-bottom: 3rem;
`;
