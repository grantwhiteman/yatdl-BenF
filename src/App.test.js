import { render, screen } from '@testing-library/react';
import App from './App';

test('shows header', () => {
  render(<App />);
  const linkElement = screen.getByText(/Yet Another ToDo List/i);
  expect(linkElement).toBeInTheDocument();
});
