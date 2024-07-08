import styled from 'styled-components/macro';

export const Container = styled.div`
  text-align: center;
  padding: 2rem 0;
`;

export const FirstLetter = styled.span`
  position: relative;
  text-transform: capitalize;
  font-size: var(--heading-primary);
  color: var(--primary-color);
  letter-spacing: 5px;

  &::before {
    content: '';
    position: absolute;
    bottom: 4px;
    left: -3px;
    height: 2px;
    width: 100%;
    background: var(--primary-color);
  }
  &::after {
    content: '';
    position: absolute;
    bottom: -2px;
    left: 1px;
    height: 2px;
    width: 70%;
    background: var(--text-white);
  }
`;
export const RestOfTitle = styled.span`
  color: var(--text-white);
  font-size: var(--heading-secondary);
  letter-spacing: 3px;
`;
