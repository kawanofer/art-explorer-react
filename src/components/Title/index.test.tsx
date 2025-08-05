// src/components/Title/index.test.tsx
import React from 'react';

import { render, screen } from '@testing-library/react';

import Title from './index';

describe('Title Component', () => {
  describe('Rendering', () => {
    it('should render children content', () => {
      render(<Title>Test Title</Title>);

      expect(screen.getByText('Test Title')).toBeInTheDocument();
    });

    it('should render with string children', () => {
      const titleText = 'Welcome to Art Explorer';

      render(<Title>{titleText}</Title>);

      expect(screen.getByText(titleText)).toBeInTheDocument();
    });
  });
});
