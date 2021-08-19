import styled from 'styled-components';

export const Wrapper = styled.section`
  -webkit-box-shadow: -2px 2px 16px 1px #b0b0b0;
  box-shadow: -2px 2px 16px 1px #b0b0b0;
  background-color: var(--white-color);
  padding: 20px;
  margin-bottom: 20px;
  border-radius: 5px;
  cursor: pointer;
`;

export const Image = styled.figure`
  img {
    border-radius: 5px;
  }
`;

export const Infos = styled.aside`
  margin-top: 20px;
  h1 {
    font-size: 2.2rem;
    margin-bottom: 20px;
  }
`;

export const Teacher = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  color: var(--grey-color);
  margin-bottom: 20px;
  .anticon-user {
    font-size: 20px;
  }
  span {
    font-size: 1.6rem;
    font-weight: 600;
  }
`;

export const Price = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
  span {
    font-weight: bold;
  }
  span:first-child {
    color: var(--blue-color);
    font-size: 3rem;
  }
  span:last-child {
    color: var(--grey-color);
    font-size: 2rem;
    text-decoration: line-through;
  }
`;
