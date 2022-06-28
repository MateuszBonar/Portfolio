import { render, screen } from '@testing-library/react';
import 'intersection-observer';
import { Banner } from 'Components';


jest.mock('react-i18next', () => ({
  useTranslation: () => ({
    t: jest.fn().mockImplementation(x => x),
    i18n: {},
  }),
}));

describe('Banner', () => {
  it('renders correctly', () => {
    render(<Banner />);
  });

  it('includes banner section div', () => {
    render(<Banner />);
    const div = screen.getByRole('link', {name: 'inf_banner_my_cv'});
    expect(div).toBeInTheDocument();
  });
});