import React from 'react';
import { render, screen } from '@testing-library/react';
import { About } from 'Components';
import 'intersection-observer';

jest.mock('react-i18next', () => ({
  useTranslation: () => ({ t: (key: string) => key }),
}));

describe('About', () => {
  it('renders without crashing', () => {
    render(<About />);
  });

  it('renders the title', () => {
    render(<About />);
    const infoDiv = screen.getByText('inf_about_me_title');
    expect(infoDiv).toBeInTheDocument();
  });

  it('render about me 1', () => {
    render(<About />);
    const aboutDiv = screen.getByText('inf_about_me_about_1');
    expect(aboutDiv).toBeInTheDocument();
  })

  it('render about me 2', () => {
    render(<About />);
    const aboutDiv = screen.getByText('inf_about_me_about_2');
    expect(aboutDiv).toBeInTheDocument();
  })

});