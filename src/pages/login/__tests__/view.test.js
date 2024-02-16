import React from 'react';

const mockUsedNavigate = jest.fn();

jest.mock('../../../hooks/usePagesNavigation', () => ({
    usePagesNavigation: () => ({ handleGoToRegisterPage: mockUsedNavigate }),
}));

describe('LoginPageView', () => {
    const mockSetShowPassword = jest.fn();
    beforeEach(() => {
        jest.spyOn(React, 'useState').mockImplementation(() => [
            false,
            mockSetShowPassword,
        ]);
    });

    it('', () => {});
});
