import { render, screen } from '@testing-library/react';
import App from './App';

test('renders profile heading', () => {
  render(<App />);
  const heading = screen.getByText(/My Profile Page./i);
  expect(heading).toBeInTheDocument();
});

test('renders profile name', () => {
  render(<App />);
  const name = screen.getByText(/Hồ Vũ Xuân Tùng/i);
  expect(name).toBeInTheDocument();
});

test('renders email address', () => {
  render(<App />);
  const email = screen.getByText(/tung98464@donga.edu.vn/i);
  expect(email).toBeInTheDocument();
});
