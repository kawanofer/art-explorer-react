// src/App.test.tsx
import React from 'react';

import { render } from '@testing-library/react';

import App from './App';

// Mocks para Jest - usar jest.mock antes dos imports
jest.mock('@src/assets/logo.svg', () => ({
  __esModule: true,
  default: 'mocked-logo.svg',
}));

jest.mock('@src/hooks/useTheme', () => ({
  useTheme: () => ({
    isDark: false,
    toggleTheme: jest.fn(),
    themeMode: 'light',
  }),
}));

jest.mock('@src/hooks/useLocalStorage', () => ({
  __esModule: true,
  default: () => ['light', jest.fn()],
}));

jest.mock('@src/contexts/ThemeContext', () => ({
  ThemeProvider: ({ children }: { children: React.ReactNode }) => (
    <div>{children}</div>
  ),
  useThemeContext: () => ({
    isDark: false,
    toggleTheme: jest.fn(),
    themeMode: 'light',
  }),
}));

jest.mock('@src/components/Header', () => ({
  __esModule: true,
  default: () => <div data-testid="header">Header</div>,
}));

jest.mock('@src/components/Footer', () => ({
  __esModule: true,
  default: () => <div data-testid="footer">Footer</div>,
}));

jest.mock('./router/routes', () => ({
  AppRouters: () => <div data-testid="routes">Routes</div>,
}));

jest.mock('react-hot-toast', () => ({
  Toaster: () => <div data-testid="toaster">Toaster</div>,
}));

describe('App', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders without crashing', () => {
    const { container } = render(<App />);
    expect(container).toBeInTheDocument();
  });
});
