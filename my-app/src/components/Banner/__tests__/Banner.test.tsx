import React from 'react';
import { render, screen } from '@testing-library/react';
import 'intersection-observer';
import {Banner} from 'Components';

jest.mock('react-i18next', () => ({
  useTranslation: () => ({ t: (key: string) => key }),
}));

describe('About', () => {

  it('renders without crashing', () => {
    render(<Banner/>)
  });

  it('renders the title', () => {
    render(<Banner/>)
    const bannerTitle = screen.getByText('inf_banner_title');
    expect(bannerTitle).toBeInTheDocument();
  });

  it('render buttons', () => {
    render(<Banner/>)
    const bannerButton = screen.getByText('inf_banner_my_cv');
    expect(bannerButton).toBeInTheDocument();
  })
  it('render ul in component', () => {
    render(<Banner/>)
    const img = screen.getByRole('img');
    expect(img).toBeInTheDocument();
  })
})
