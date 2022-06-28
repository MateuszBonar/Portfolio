import 'intersection-observer';
import { render, screen, within } from '@testing-library/react';
import { Footer } from 'Components';

jest.mock('react-i18next', () => ({
  useTranslation: () => ({
    t: jest.fn().mockImplementation(x => x),
    i18n: {},
  }),
}));

describe('Footer', () => {
  it('renders correctly', () => {
    render(<Footer />);
  });

  it('includes footer section div', () => {
    render(<Footer />);
    const p = screen.getByText('inf_contact_description');
    expect(p).toBeInTheDocument();
  });

  it('get all links', () => {
    render(<Footer />);
    const list = screen.getByRole("list")
    const { getAllByRole } = within(list)
    const items = getAllByRole("listitem")
    expect(items.length).toBe(3)
  })
});