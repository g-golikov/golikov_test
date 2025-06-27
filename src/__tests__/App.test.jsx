import { render, screen } from '@testing-library/react';
import App from '../App.jsx';

describe('App component', () => {
  it('renders react logo', () => {
    render(<App />);
    expect(screen.getByRole('img')).toBeInTheDocument();
  });
});
