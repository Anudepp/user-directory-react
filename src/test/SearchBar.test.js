import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import SearchBar from '../components/SearchBar';

describe('SearchBar Component', () => {
  test('renders the search input field', () => {
    render(<SearchBar onSearch={() => {}} />);
    const inputElement = screen.getByPlaceholderText(/search by name, email, or phone/i);
    expect(inputElement).toBeInTheDocument();
  });

  test('input field starts with an empty value', () => {
    render(<SearchBar onSearch={() => {}} />);
    const inputElement = screen.getByPlaceholderText(/search by name, email, or phone/i);
    expect(inputElement.value).toBe('');
  });

  test('updates the input value as the user types', () => {
    render(<SearchBar onSearch={() => {}} />);
    const inputElement = screen.getByPlaceholderText(/search by name, email, or phone/i);
    fireEvent.change(inputElement, { target: { value: 'John' } });
    expect(inputElement.value).toBe('John');
  });

  test('calls the onSearch callback when the input value changes', () => {
    const onSearchMock = jest.fn();
    render(<SearchBar onSearch={onSearchMock} />);
    const inputElement = screen.getByPlaceholderText(/search by name, email, or phone/i);
    fireEvent.change(inputElement, { target: { value: 'Jane' } });
    expect(onSearchMock).toHaveBeenCalledTimes(1);
    expect(onSearchMock).toHaveBeenCalledWith('Jane');
  });

  test('calls onSearch with an empty string when input is cleared', () => {
    const onSearchMock = jest.fn();
    render(<SearchBar onSearch={onSearchMock} />);
    const inputElement = screen.getByPlaceholderText(/search by name, email, or phone/i);

    // Type in some text
    fireEvent.change(inputElement, { target: { value: 'Jane' } });
    expect(onSearchMock).toHaveBeenCalledWith('Jane');

    // Clear the input
    fireEvent.change(inputElement, { target: { value: '' } });
    expect(onSearchMock).toHaveBeenCalledWith('');
  });
});