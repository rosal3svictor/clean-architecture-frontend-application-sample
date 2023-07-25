import { render, screen } from '@testing-library/react';

import App from './App';

describe('App', () => {
  test('renders the app header', () => {
    render(<App />);
    const header = screen.getByRole('heading', { name: 'Vite + React' });
    expect(header).toBeInTheDocument();
  });

  test('renders the count', () => {
    render(<App />);
    const count = screen.getByText('count is 0');
    expect(count).toBeInTheDocument();
  });
});
