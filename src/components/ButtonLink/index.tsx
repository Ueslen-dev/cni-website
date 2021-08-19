import React from 'react';
import Link from 'next/link';
import * as S from './styles';

type Props = {
  label: string;
  path: string;
};

const ButtonLink = ({ label, path }: Props) => (
  <S.Wrapper>
    <Link href={path}>
      <a>{label}</a>
    </Link>
  </S.Wrapper>
);
export default ButtonLink;
