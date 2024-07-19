import { renderHook } from '@testing-library/react-hooks';
import * as React from 'react';
import { usePasswordInput } from '../usePasswordInput';

describe('usePasswordInput', () => {
    beforeEach(() => {
        jest.spyOn(React, 'useState').mockResolvedValue([false]);
    });
    it('should test state value of hook', () => {
        const { result } = renderHook(() => usePasswordInput());
        expect(result.current.showPassword).toBeFalsy();
    });
    it('should test state value change', () => {
        const { result } = renderHook(() => usePasswordInput());
        result.current.setShowPassword(true);
        expect(result.current.showPassword).toBeTruthy();
    });
});
