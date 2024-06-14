import { renderHook } from '@testing-library/react-hooks';
import { useUnprotectedPage } from '../useUnprotectedPage';
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

describe('useUnprotectedPage tests suite', () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });
    it('should call push function and navigate to home', () => {
        jest.spyOn(window, 'localStorage', 'get').mockImplementation(() => ({
            getItem: () => mockGetItem('123'),
        }));
        renderHook(() => useUnprotectedPage());
        expect(mockPush).toBeCalled();
        expect(mockPush).toBeCalledWith(PATH.HOME);
    });
    it("shouldn't call push function and stay on the same page", () => {
        jest.spyOn(window, 'localStorage', 'get').mockImplementation(() => ({
            getItem: () => mockGetItem(undefined),
        }));
        renderHook(() => useUnprotectedPage());
        expect(mockPush).not.toBeCalled();
    });
});
