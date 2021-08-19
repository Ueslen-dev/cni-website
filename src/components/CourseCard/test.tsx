import { screen, render } from '@testing-library/react';

import CourseCard from '.';

describe('<CourseCard/>', () => {
  it('should render the heading', () => {
    const { container } = render(<CourseCard />);
    expect(
      screen.getByRole('heading', { name: /CourseCard/i })
    ).toBeInTheDocument();
    expect(container.firstChild).toMatchSnapshot();
  });

});
