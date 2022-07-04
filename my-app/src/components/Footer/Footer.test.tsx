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

  it('check is div wrapper', () => {
    const { container } = render(<Footer />)
    // eslint-disable-next-line testing-library/no-node-access,testing-library/no-container
    const div = container.getElementsByClassName('footer__quote')
    expect(div).toHaveLength(1);
  })

  it('check is footer section', () => {
    const { container } = render(<Footer />)
    // eslint-disable-next-line testing-library/no-node-access,testing-library/no-container
    const div = container.getElementsByClassName('footer__footer-section')
    expect(div).toHaveLength(1);
  })

  it('check is contact text', () => {
    render(<Footer />)
    const p = screen.getByText('inf_contact_author')
    expect(p.className).toBe('');
  })

  it('check is ul in footer', () => {
    render(<Footer />)
    const ul = screen.getByRole("list")
    expect(ul.className).toBe('footer__icons contactCircles');
  })

  it('check is description', () => {
    render(<Footer />)
    const p = screen.getByText("inf_contact_description")
    expect(p).toBeInTheDocument();
  })
});