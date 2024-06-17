import { renderHook } from '@testing-library/react-hooks';
import { useFooter } from '../useFooter';

const mockRouter = jest.fn();

jest.mock('next/navigation', () => ({
    useRouter: jest.fn().mockReturnValue(mockRouter),
    usePathname: jest.fn().mockReturnValue('/dashboard/cart'),
}));

describe('useFooter', () => {
    it('should give the correct pagePage', () => {
        const { result } = renderHook(() => useFooter());
        expect(result.current.pagePath).toBe('/cart');
    });
});
