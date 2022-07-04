import { WrapperContainer } from 'Components';
import { render } from '@testing-library/react';


const mocks = {
  classes: ['about', 'container'],
  id: 'about',
}

describe('WrapperContainer', () => {
  it('renders correctly', () => {
    render(<WrapperContainer classes={mocks.classes} id={mocks.id} />);
  })

  it('renders about', () => {
    const { container } = render(<WrapperContainer classes={mocks.classes} id={mocks.id} />);
    expect(container).toMatchSnapshot();
  });
})