import { render } from '@testing-library/react';

import ButtonLink from '.';

describe('<Button/>', () => {
  it('should render the heading', () => {
    const { container } = render(
      <ButtonLink label="Acessar portal" path="/" />
    );

    expect(container.firstChild).toMatchSnapshot();
  });
});
