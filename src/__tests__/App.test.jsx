import { render, screen } from '@testing-library/react';
import App from '../App.tsx';

describe('App component', () => {
  it('renders react logo', () => {
    render(<App />);
    expect(screen.getByRole('img')).toBeInTheDocument();
  });
});
