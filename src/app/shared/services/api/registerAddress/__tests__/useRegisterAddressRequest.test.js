import { renderHook } from '@testing-library/react-hooks';
import { useRegisterAddressRequest } from '../useRegisterAddressRequest';
import * as useUserAddressState from '../../../../../shared/stores/redux/userAddress';
import { USER_ADDRESS_ACTION_TYPES } from '../../../../stores/redux/userAddress/interface';
import PATH from '../../../../constants/pathsEnum';

jest.mock('../../shared/user/mapUserAddressDTOToUserAddress');

const mockPush = jest.fn();
const mockUserAddressDispatch = jest.fn();
const mockRegisterAddress = jest.fn();

jest.mock('next/navigation', () => ({
    useRouter() {
        return {
            push: mockPush,
        };
    },
}));

const mockRegisterAddressInput = {
    userId: '    userId:',
    city: '    city:',
    state: '    state:',
    streetName: '    streetName:',
    streetNumber: '    streetNumber:',
    zone: '    zone:',
    complement: '    complement?:',
};

describe('useRegisterAddressRequest', () => {
    beforeEach(() => {
        jest.spyOn(
            useUserAddressState,
            'useUserAddressState'
        ).mockImplementation(() => {
            return {
                userAddressDispatch: mockUserAddressDispatch,
            };
        });
        jest.spyOn(require('@apollo/client'), 'useMutation').mockImplementation(
            () => {
                return [mockRegisterAddress, { loading: false }];
            }
        );
    });
    afterEach(() => {
        jest.clearAllMocks();
    });
    it('should call userAddressDispatch with loading type', () => {
        jest.spyOn(require('@apollo/client'), 'useMutation').mockImplementation(
            () => {
                return [mockRegisterAddress, { loading: true }];
            }
        );
        renderHook(() => useRegisterAddressRequest());
        expect(mockUserAddressDispatch).toBeCalledWith({
            type: USER_ADDRESS_ACTION_TYPES.LOADING,
        });
    });
    it('should run handleRegisterAddress correctly', async () => {
        const { result } = renderHook(() => useRegisterAddressRequest());
        await result.current.handleRegisterAddress(mockRegisterAddressInput);
        expect(mockRegisterAddress).toBeCalledTimes(1);
        expect(mockRegisterAddress).toBeCalledWith({
            variables: { ...mockRegisterAddressInput },
        });
        expect(mockUserAddressDispatch).toBeCalledTimes(1);
        expect(mockUserAddressDispatch).toBeCalledWith({
            type: USER_ADDRESS_ACTION_TYPES.SUCCESS,
            payload: undefined,
        });
        expect(mockPush).toBeCalledWith(PATH.DASHBOARD);
    });
    it('should run handleRegisterAddress with error', async () => {
        const mockError = jest.fn().mockRejectedValueOnce(new Error('foo'));
        jest.spyOn(require('@apollo/client'), 'useMutation').mockImplementation(
            () => {
                return [mockError, { loading: false }];
            }
        );
        const { result } = renderHook(() => useRegisterAddressRequest());
        await result.current.handleRegisterAddress(mockRegisterAddressInput);
        expect(mockUserAddressDispatch).toBeCalledTimes(1);
        expect(mockUserAddressDispatch).toBeCalledWith({
            type: USER_ADDRESS_ACTION_TYPES.FAILURE,
            alertMessage: 'foo',
        });
    });
});
