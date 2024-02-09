import React from 'react';
import { render } from '@testing-library/react';
import { LoginPageView } from '../view';

const mockUsedNavigate = jest.fn();

jest.mock('../../../hooks/usePagesNavigation', () => ({
    usePagesNavigation: () => mockUsedNavigate,
}));

jest.mock('react-hook-form');

describe('LoginPageView', () => {
    const mockOnSubmit = jest.fn();
    const mockSetShowPassword = jest.fn();
    beforeEach(() => {
        jest.spyOn(React, 'useState').mockImplementation(() => [
            false,
            mockSetShowPassword,
        ]);
    });
    it('should test onClick logic of show password IconButton', async () => {
        render(<LoginPageView onSubmit={mockOnSubmit} control={{}} />);
        // TODO: to reproduce onClick event of show password IconButton component
        expect(mockSetShowPassword).toBeCalled();
    });
});
