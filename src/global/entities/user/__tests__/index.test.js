import React from 'react';
import { renderHook } from '@testing-library/react';
import { useUserDataState } from '..';

const mockState = {
    userName: 'userName',
};

const mockSetUserPropsParameter = {
    userName: 'newUserName',
};

jest.mock('react', () => ({
    ...jest.requireActual('react'),
    useState: jest.fn(),
}));

describe('useUserDataState', () => {
    const mockSetState = jest.fn();
    beforeEach(() => {
        React.useState.mockReturnValue([mockState, mockSetState]);
    });
    it('should test if setNavigationHeader from useState hook is beeing called once', () => {
        const { result } = renderHook(() => useUserDataState);
        result.current().setUserProps();
        expect(mockSetState).toBeCalledTimes(1);
    });
    it('should test if setNavigationHeader from useState hook is beeing called with correct parameter', () => {
        const { result } = renderHook(() => useUserDataState);
        result.current().setUserProps(mockSetUserPropsParameter);
        expect(mockSetState).toBeCalledWith(
            expect.objectContaining({
                ...mockSetUserPropsParameter,
            })
        );
    });
});
