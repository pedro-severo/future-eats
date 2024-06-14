import { renderHook } from '@testing-library/react-hooks';
import { useProtectedPage } from '../useProtectedPage';
import PATH from '../../constants/pathsEnum';

const mockGetItem = jest.fn().mockImplementation((token) => {
    return token;
});

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
        jest.spyOn(window, 'localStorage', 'get').mockImplementation(() => ({
            getItem: () => mockGetItem(undefined),
        }));
        renderHook(() => useProtectedPage());
        expect(mockPush).toBeCalled();
        expect(mockPush).toBeCalledWith(PATH.LOGIN);
    });
    it("shouldn't call push function and stay on the same page", () => {
        jest.spyOn(window, 'localStorage', 'get').mockImplementation(() => ({
            getItem: () => mockGetItem('token'),
        }));
        renderHook(() => useProtectedPage());
        expect(mockPush).not.toBeCalled();
    });
});
