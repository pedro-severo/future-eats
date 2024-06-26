import { renderHook } from '@testing-library/react-hooks';
import { useProtectedPage } from '../useProtectedPage';
import PATH from '../../constants/pathsEnum';
import React from 'react';

const mockPush = jest.fn();

jest.mock('next/navigation', () => ({
    useRouter() {
        return {
            push: mockPush,
        };
    },
}));

describe('useProtectedPage tests suite', () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });
    it('should call push function and navigate to login', () => {
        renderHook(() => useProtectedPage());
        expect(mockPush).toBeCalled();
        expect(mockPush).toBeCalledWith(PATH.LOGIN);
    });
    it("shouldn't call push function and stay on the same page", () => {
        jest.spyOn(React, 'useMemo').mockResolvedValue('token');
        renderHook(() => useProtectedPage());
        expect(mockPush).not.toBeCalled();
    });
});
