import { renderHook } from '@testing-library/react-hooks';
import { useUnprotectedPage } from '../useUnprotectedPage';
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

describe('useUnprotectedPage tests suite', () => {
    it("shouldn't call push function and stay on the same page", () => {
        renderHook(() => useUnprotectedPage());
        expect(mockPush).not.toBeCalled();
    });
    it('should call push function and navigate to home', () => {
        jest.spyOn(React, 'useMemo').mockResolvedValue('token');
        renderHook(() => useUnprotectedPage());
        expect(mockPush).toBeCalled();
        expect(mockPush).toBeCalledWith(PATH.DASHBOARD);
    });
});
