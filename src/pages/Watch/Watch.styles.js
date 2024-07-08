import styled from 'styled-components/macro';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Attention = styled.h2`
  text-align: center;
  color: var(--text-white);
  margin-bottom: 3rem;
`;

export const MagnetContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 40px;
  flex-wrap: wrap;
`;
export const Magnet = styled.a`
  color: var(--primary-color);
  font-size: 2rem;
  /* display: inline-block;
  background-color: #fff; */
`;
export const MagnetDetails = styled.div`
  color: var(--text-white);
`;
