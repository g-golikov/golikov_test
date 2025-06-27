import { render } from '@testing-library/react';
import App from '../app/App.tsx';

describe('App component', () => {
  it('renders react logo', () => {
    render(<App />);
    //expect(screen.getByRole('div')).toBeInTheDocument();
  });
});
