import Link from 'next/link';
import routes from 'routes';

import { HeaderProps } from 'types/api.landingPage';
import { getImageUrl } from 'utils';

import * as S from './styles';

const Header = ({ logo }: HeaderProps) => {
  const { url, alternativeText } = logo;

  return (
    <S.Wrapper>
      <Link href={routes.home}>
        <a>
          <S.Logo src={getImageUrl(url)} alt={alternativeText} loading="lazy" />
        </a>
      </Link>
    </S.Wrapper>
  );
};

export default Header;
