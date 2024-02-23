import React from 'react';
import { renderHook } from '@testing-library/react-hooks';
import { navigationHeaderInitialState, useNavigationHeaderDataState } from '.';

describe('useNavigationHeaderDataState', () => {
    const mockSetNavigationHeader = jest.fn();
    beforeEach(() => {
        jest.spyOn(React, 'useState').mockImplementation(() => [
            navigationHeaderInitialState,
            mockSetNavigationHeader,
        ]);
    });
    it('should test useNavigationHeaderDataState initial props', () => {
        const { result } = renderHook(() => useNavigationHeaderDataState());
        expect(result.current.navigationHeader.title).toBe('');
        expect(result.current.navigationHeader.hasTitle).toBe(false);
        expect(result.current.navigationHeader.shouldRenderHeader).toBe(false);
        expect(result.current.navigationHeader.navigationHistory).toEqual([]);
        expect(typeof result.current.setNavigationHeaderProps).toBe('function');
    });
    it('should test setNavigationHeaderProps function', () => {
        const { result } = renderHook(() => useNavigationHeaderDataState());
        result.current.setNavigationHeaderProps({
            title: 'newTitle',
        });
        expect(mockSetNavigationHeader).toBeCalled();
        expect(mockSetNavigationHeader).toBeCalledWith({
            title: 'newTitle',
            hasTitle: false,
            shouldRenderHeader: false,
            navigationHistory: [],
        });
    });
});
