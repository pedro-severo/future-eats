import React from 'react';
import { renderHook } from '@testing-library/react';
import { useNavigationHeaderDataState } from '..';

const mockState = {
    title: 'headerTitle',
    shouldRenderHeader: true,
    navigationHistory: [],
};

const mockSetNavigationHeaderPropsParameter = {
    title: 'newTitle',
};

jest.mock('react', () => ({
    ...jest.requireActual('react'),
    useState: jest.fn(),
}));

describe('useNavigationDataState', () => {
    const mockSetState = jest.fn();
    beforeEach(() => {
        React.useState.mockReturnValue([mockState, mockSetState]);
    });
    it('should test if setNavigationHeader from useState hook is beeing called once', () => {
        const { result } = renderHook(() => useNavigationHeaderDataState);
        result.current().setNavigationHeaderProps();
        expect(mockSetState).toBeCalledTimes(1);
    });
    it('should test if setNavigationHeader from useState hook is beeing called with correct parameter', () => {
        const { result } = renderHook(() => useNavigationHeaderDataState);
        result
            .current()
            .setNavigationHeaderProps(mockSetNavigationHeaderPropsParameter);
        expect(mockSetState).toBeCalledWith(
            expect.objectContaining({
                ...mockSetNavigationHeaderPropsParameter,
            })
        );
    });
});
