import { render, screen } from '@testing-library/react';
import List from './List';

test('shows list', () => {
  render(<List />);
  const linkElement = screen.getByText(/Take bins out/i);
  expect(linkElement).toBeInTheDocument();
});
