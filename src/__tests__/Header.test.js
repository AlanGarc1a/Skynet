import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import Header from '../components/Header';

describe('Header component', () => {
    test('header content is in the document', () => {

        render(<Header />);

        const heading = screen.getByText('Skynet');
        const subHeading = screen.getByText('Advanced Technology');
        const button = screen.getByText('Get Started')

        expect(heading).toBeInTheDocument();
        expect(subHeading).toBeInTheDocument();
        expect(button).toBeInTheDocument();
    });
});