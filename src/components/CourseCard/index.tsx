import { UserOutlined } from '@ant-design/icons';

import * as S from './styles';

type Props = {
  image: string;
  alt: string;
  name: string;
  teacher: string;
  price: string;
  offer?: string;
};

const CourseCard = ({ image, alt, name, teacher, price, offer }: Props) => (
  <S.Wrapper>
    <S.Image>
      <img src={image} alt={alt} loading="lazy" />
    </S.Image>
    <S.Infos>
      <h1>{name}</h1>
      <S.Teacher>
        <UserOutlined />
        <span>{teacher}</span>
      </S.Teacher>
      <S.Price>
        <span>R${offer ? offer : price}</span>
        <span>R${offer && price}</span>
      </S.Price>
    </S.Infos>
  </S.Wrapper>
);
export default CourseCard;
