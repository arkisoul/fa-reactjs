import { } from '@testing-library/react';
import { screen, render } from '../../shared/utils/test-utils';
import App from './App';

describe('App', () => {
  test('renders home component with title', () => {
    render(<App />);
    const homeTitleElement = screen.getByText(/home component/i);
    expect(homeTitleElement).toBeInTheDocument();
  });

  it('should render guest links in navbar', () => {
    render(<App />);
    const links = screen.getAllByRole('link');
    expect(links.length).toBe(3);
  })

  it('should render authenticated user links in navbar', () => {
    render(<App />, { preloadedState: { auth: { isAuthenticated: true } } });
    const links = screen.getAllByRole('link');
    expect(links.length).toBe(4);
  })
})
