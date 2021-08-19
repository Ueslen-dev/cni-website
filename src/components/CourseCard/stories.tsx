import { Story, Meta } from '@storybook/react/types-6-0';

import CourseCard from '.';

export default {
  title: 'CourseCard',
  component: CourseCard,
  args: {
    image: 'http://www.esmaltale.com.br/img/mEp.png',
    alt: 'Mulher pintando a unha do pé e a unha da mão',
    name: 'Curso de manicure',
    teacher: 'Aline Sila Campos',
    price: '300,00',
    offer: '230,00'
  }
} as Meta;

export const Basic: Story = (args) => {
  const { image, alt, name, teacher, price, offer } = args;
  return (
    <CourseCard
      image={image}
      alt={alt}
      name={name}
      teacher={teacher}
      price={price}
      offer={offer}
    />
  );
};
