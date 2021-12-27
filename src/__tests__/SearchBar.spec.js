import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import SearchBar from '../components/SearchBar';

const mockSubmit = jest.fn();

test('search initializes with "react"', () => {
  render(<SearchBar name="react" handleSubmit={mockSubmit} />);
  const inputElement = screen.getByRole('textbox');
  expect(inputElement).toHaveValue('react');
});

test('button click submits form', () => {
  render(<SearchBar name="react" handleSubmit={mockSubmit} />);
  const btnElement = screen.getByRole('button');
  userEvent.click(btnElement);
  expect(mockSubmit).toHaveBeenCalled();
});
