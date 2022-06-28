import 'intersection-observer';
import { render, screen } from '@testing-library/react';
import { About } from 'Components';


jest.mock('react-i18next', () => ({
  useTranslation: () => ({
    t: jest.fn().mockImplementation(x => x),
    i18n: {},
  }),
}));

describe('About', () => {
  it('renders correctly', () => {
    render(<About />);
  });

  it('h1 about me', () => {
    render(<About />);
    const div = screen.getByText('inf_about_me_about_1');
    expect(div).toHaveTextContent('inf_about_me_about_1');
  });

  it('h1 about me 2', () => {
    render(<About />);
    const div = screen.getByText('inf_about_me_about_2');
    expect(div).toHaveTextContent('inf_about_me_about_2');
  });

  it('check div by data-testid', () => {
    render(<About />);
    const div = screen.getByTestId('main-element');
    expect(div).toBeInTheDocument();
  });

  it('check is wrapper about', () => {
    render(<About />);
    const h1 = screen.getByText('inf_about_me_title');
    expect(h1).toHaveTextContent('inf_about_me_title');
  });

  it('get by title h1', () => {
    render(<About />);
    const h1 = screen.getByText('inf_about_me_title');
    expect(h1).toBeInTheDocument();
  })
});