import * as useRegisterAddressSchema from '../useRegisterAddressSchema';
import * as useUserAddressState from '../../../../shared/stores/redux/userAddress';
import * as useUserState from '../../../../shared/stores/redux/user';
import { renderHook } from '@testing-library/react-hooks';
import { useRegisterAddressPage } from '../useRegisterAddressPage';
import { USER_ADDRESS_ACTION_TYPES } from '../../../../shared/stores/redux/userAddress/interface';
import * as useNavigationHeaderState from '../../../../shared/stores/navigationHeader';

jest.mock('../../../../shared/hooks/useProtectedPage');

const mockPush = jest.fn();

jest.mock('next/navigation', () => ({
    useRouter() {
        return {
            push: mockPush,
        };
    },
}));

const mockHandleRegisterAddress = jest.fn();

jest.mock(
    '../../../../shared/services/api/registerAddress/useRegisterAddressRequest',
    () => ({
        useRegisterAddressRequest: () => ({
            handleRegisterAddress: mockHandleRegisterAddress,
        }),
    })
);

const mockSchema = {
    city: 'mockValue',
    state: 'mockValue',
    streetName: 'mockValue',
    streetNumber: 'mockValue',
    zone: 'mockValue',
};

const mockUserAddressDispatch = jest.fn();

describe('useRegisterAddressPage', () => {
    beforeEach(() => {
        jest.spyOn(
            useRegisterAddressSchema,
            'useRegisterAddressSchema'
        ).mockImplementation(() => {
            return {
                schema: mockSchema,
            };
        });
        jest.spyOn(
            useUserAddressState,
            'useUserAddressState'
        ).mockImplementation(() => {
            return {
                userAddressDispatch: mockUserAddressDispatch,
                userAddressState: {},
            };
        });
        jest.spyOn(useUserState, 'useUserState').mockImplementation(() => {
            return {
                userState: {
                    user: {
                        id: 'mockId',
                    },
                },
            };
        });
        jest.spyOn(
            useNavigationHeaderState,
            'useNavigationHeaderState'
        ).mockImplementation(() => {
            return {
                setNavigationHeader: jest.fn(),
            };
        });
    });
    it('call onCloseAlert correctly', async () => {
        const { result } = renderHook(() => useRegisterAddressPage());
        await result.current.onCloseAlert();
        expect(mockUserAddressDispatch).toBeCalledWith({
            type: USER_ADDRESS_ACTION_TYPES.RESET_STATE,
        });
    });
});
