// src/components/Footer/index.test.tsx
import { render, screen } from '@testing-library/react';
import Footer from './index';

describe('Footer Component', () => {
    it('should render the footer with correct text', () => {
        render(<Footer />);
        const footerElement = screen.getByText(/Metropolitan Museum of Art \(The Met\)/i);
        expect(footerElement).toBeInTheDocument();
    });
});