import React from 'react';
import { GetStaticProps } from 'next';

import Header from 'components/Header';
import CourseCard from 'components/CourseCard';
import Footer from 'components/Footer';
import { Button } from 'antd';

import client from 'graphql/client';
import GET_LANDING_PAGE from 'graphql/queries/getLandingPage';
import { LandingPageProps } from 'types/api.landingPage';
import { getImageUrl } from 'utils/index';

import * as S from './styles';

export const landingPage = ({
  header,
  bannerHero,
  mainCourses,
  callToAction,
  joinUs,
  footer
}: LandingPageProps) => {
  const { background: backgroundBannerHero, moreAbout } = bannerHero;
  const {
    title: mainCourseTitle,
    subtitle: mainCourseSubtitle,
    course
  } = mainCourses;
  const {
    title: callToActionTiitle,
    subtitle: callToActionSubtitle,
    background: callToActionBackground,
    button: callToActionButton
  } = callToAction;
  const {
    title: joinUsTitle,
    subtitle: joinUsSubtitle,
    button: joinUsButton,
    image: joinUsImage
  } = joinUs;

  return (
    <>
      <Header {...header} />
      <S.Waraper>
        <S.Banner url={backgroundBannerHero?.url}>
          <S.MoreAbout>
            <h1 className="title">{moreAbout?.title}</h1>
            <h2 className="subTitle">{moreAbout?.subtitle}</h2>
            <Button type="primary" shape="round" size="large">
              {moreAbout?.buttonLabel}
            </Button>
          </S.MoreAbout>
        </S.Banner>
        <S.MainCourses>
          <S.SessionIdentifierCourses>
            <h1 className="title">{mainCourseTitle}</h1>
            <h2 className="subTitle">{mainCourseSubtitle}</h2>
          </S.SessionIdentifierCourses>
          <S.CourseGroup>
            {course?.length > 0 &&
              course.map((courseElement, key: number) => {
                const { image, name, teacher, price, offer } = courseElement;
                return (
                  <CourseCard
                    key={key}
                    image={getImageUrl(image?.url)}
                    alt={image?.alternativeText}
                    name={name}
                    teacher={teacher}
                    price={price}
                    offer={offer}
                  />
                );
              })}
          </S.CourseGroup>
        </S.MainCourses>
        <S.CallToAction url={callToActionBackground?.url}>
          <h1 className="title">{callToActionTiitle}</h1>
          <h2 className="subTitle">{callToActionSubtitle}</h2>
          <Button type="primary" shape="round" size="large">
            {callToActionButton?.label}
          </Button>
        </S.CallToAction>
        <S.JoinUs>
          <S.JoinUsFigure>
            <img
              src={getImageUrl(joinUsImage?.url)}
              alt={joinUsImage?.alternativeText}
              loading="lazy"
            />
          </S.JoinUsFigure>
          <S.JoinUsDescription>
            <h1 className="title">{joinUsTitle}</h1>
            <p className="paragraph">{joinUsSubtitle}</p>
            <Button type="primary" shape="round" size="large">
              {joinUsButton?.label}
            </Button>
          </S.JoinUsDescription>
        </S.JoinUs>
      </S.Waraper>
      <Footer {...footer} />
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const { landingPage } = await client.request(GET_LANDING_PAGE);

  return {
    props: {
      ...landingPage
    }
  };
};

export default landingPage;
