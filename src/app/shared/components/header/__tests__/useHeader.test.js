import { renderHook } from '@testing-library/react-hooks';
import { useHeader } from '../useHeader';
import * as NavigationHeaderContext from '../../../../shared/stores/navigationHeader';

const mockGoBack = jest.fn();

jest.mock('next/navigation', () => ({
    useRouter() {
        return {
            back: mockGoBack,
        };
    },
    usePathname() {
        return '/';
    },
}));

const mockNavigationHeaderState = {
    title: 'headerTitle',
    shouldRenderHeader: true,
    shouldRenderBackIcon: true,
};

describe('useHeader', () => {
    beforeEach(() => {
        jest.spyOn(
            NavigationHeaderContext,
            'useNavigationHeaderState'
        ).mockImplementation(() => ({
            navigationHeader: mockNavigationHeaderState,
        }));
    });
    it('should call goBack function', () => {
        const { result } = renderHook(() => useHeader());
        result.current.goBack();
        expect(mockGoBack).toBeCalled();
    });
});
