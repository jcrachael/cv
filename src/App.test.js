import { render, screen } from '@testing-library/react';
import App from './App';

test('renders title', () => {
  render(<App />);
  const div = screen.getByText(/CV Generator/i);
  expect(div).toBeInTheDocument();
});
