import styled from 'styled-components';

export const Wrapper = styled.header`
  background-color: var(--white-color);
  border-bottom: 1px solid #dddd;
  width: 100%;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: center;
  a {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 50%;
  }
`;

export const Logo = styled.img`
  width: 50%;
  @media (min-width: 900px) {
    width: 30%;
  }
  @media (min-width: 1200px) {
    width: 150px;
  }
`;
