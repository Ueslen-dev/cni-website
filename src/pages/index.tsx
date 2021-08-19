import React from 'react';
import { GetStaticProps } from 'next';

import ButtonLink from 'components/ButtonLink';

import client from 'graphql/client';
import GET_WELCOME from 'graphql/queries/getWelcome';
import { WelcomeProps } from 'types/api.welcome';
import { getImageUrl } from 'utils';

import * as S from './styles';

const Welcome = ({ Main }: WelcomeProps) => {
  const { logo, button, title, subtitle } = Main;

  return (
    <S.Wrapper>
      <S.Logo
        src={getImageUrl(logo?.url)}
        alt={logo?.alternativeText}
        loading="lazy"
      />
      <S.Title>{title}</S.Title>
      <S.Description>{subtitle}</S.Description>
      <ButtonLink label={button?.label} path={button?.url} />
    </S.Wrapper>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const { welcome } = await client.request(GET_WELCOME);

  return {
    props: {
      ...welcome
    }
  };
};

export default Welcome;
