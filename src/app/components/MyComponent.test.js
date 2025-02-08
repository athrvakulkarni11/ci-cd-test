// components/MyComponent.test.js
import React from 'react';
import { render, screen } from '@testing-library/react';
import MyComponent from './MyComponent';
import '@testing-library/jest-dom/extend-expect';

describe('MyComponent', () => {
  it('renders correctly', () => {
    render(<MyComponent />);
    expect(screen.getByText('Hello, World!')).toBeInTheDocument();
  });
});
