import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import App, { excuses } from './App.jsx';

test('no excuse is shown on initial render', () => {
  render(<App />);
  expect(screen.queryByTestId('excuse')).toBeNull();
});

test('generates an excuse when button is clicked', () => {
  render(<App />);
  fireEvent.click(screen.getByText('Generate Excuse'));
  const displayed = screen.getByTestId('excuse');
  expect(excuses).toContain(displayed.textContent);
});
