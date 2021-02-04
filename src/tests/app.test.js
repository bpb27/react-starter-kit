import { render, screen } from '@testing-library/react';
import App from '../app';

describe('App', () => {
  it('renders', () => {
    render(<App />);
    expect(screen.getByText('Sample App')).toBeInTheDocument();
  });
});
