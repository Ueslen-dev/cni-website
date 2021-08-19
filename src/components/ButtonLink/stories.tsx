import { Story, Meta } from '@storybook/react/types-6-0';

import ButtonLink from '.';

export default {
  title: 'ButtonLink',
  component: ButtonLink,
  args: {
    label: 'Acessar portal',
    path: '/'
  }
} as Meta;

export const Basic: Story = (args) => (
  <ButtonLink label="Acessar portal" path="/" {...args} />
);
