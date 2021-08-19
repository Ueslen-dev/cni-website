import styled from 'styled-components';

export const Wrapper = styled.main`
  background-color: #06092b;
  width: 100%;
  height: 100%;
  padding: 3rem;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Logo = styled.img`
  width: 50%;
  margin-bottom: 2rem;
  @media (min-width: 900px) {
    width: 300px;
  }
`;

export const Title = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 10px;
  color: #fff;
`;

export const Description = styled.h2`
  font-size: 1.8rem;
  font-weight: 400;
  color: #ddd;
  margin-bottom: 4rem;
`;
