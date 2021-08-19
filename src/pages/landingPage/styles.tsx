import styled from 'styled-components';
import { getImageUrl } from 'utils';

interface BannerProps {
  url: string;
}

export const Waraper = styled.main`
  width: 100%;
  min-height: 100vh;
`;

export const Banner = styled.section<BannerProps>`
  background: url(${(props) => getImageUrl(props.url)}) no-repeat center center /
    cover;
  padding: 50px;
`;

export const MoreAbout = styled.article`
  background-color: var(--white-color);
  padding: 40px;
  border-radius: 5px;
  h2 {
    margin-bottom: 20px;
  }
  @media (min-width: 900px) {
    width: 400px;
  }
`;

export const MainCourses = styled.section`
  margin-top: 30px;
  padding: 40px;
`;

export const SessionIdentifierCourses = styled.article`
  padding: 20px;
  @media (min-width: 1200px) {
    text-align: center;
  }
`;

export const CourseGroup = styled.div`
  margin-top: 30px;
  @media (min-width: 900px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 15px;
  }
  @media (min-width: 1200px) {
    display: flex;
    justify-content: center;
  }
`;

export const CallToAction = styled.section<BannerProps>`
  background: linear-gradient(rgba(36, 110, 191, 0.8), rgba(50, 110, 191, 0.5)),
    url(${(props) => getImageUrl(props.url)}) no-repeat center center / cover;
  padding: 50px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  h1,
  h2 {
    color: var(--white-color);
  }
  h2 {
    margin-bottom: 30px;
  }
`;

export const JoinUs = styled.section`
  padding: 50px;
  @media (min-width: 900px) {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const JoinUsFigure = styled.figure`
  img {
    border-radius: 2rem;
  }
  @media (min-width: 1200px) {
    width: 600px;
    margin: 0;
    img {
      width: 80%;
    }
  }
`;

export const JoinUsDescription = styled.article`
  text-align: center;
  padding: 10px 40px 10px;
  p {
    margin-bottom: 30px;
  }
  @media (min-width: 900px) {
    text-align: left;
  }
  @media (min-width: 1200px) {
    padding: 0px;
  }
`;
