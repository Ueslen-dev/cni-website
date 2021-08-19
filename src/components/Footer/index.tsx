import Link from 'next/link';
import routes from 'routes';

import { getImageUrl } from 'utils';

import * as S from './styles';

type Props = {
  logo: {
    alternativeText: string;
    url: string;
  };
};

const Footer = ({ logo }: Props) => (
  <S.Wrapper>
    <Link href={routes.home}>
      <a>
        <S.Logo
          src={getImageUrl(logo?.url)}
          alt={logo?.alternativeText}
          loading="lazy"
        />
      </a>
    </Link>
  </S.Wrapper>
);
export default Footer;
