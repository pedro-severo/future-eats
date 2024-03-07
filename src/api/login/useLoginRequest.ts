import { useUserState } from '../../global/user/context';
import { USER_ACTION_TYPES } from '../../global/user/interface';
import { login } from './request';
import { LoginInput } from './interface';
import { usePagesNavigation } from '../../hooks/usePagesNavigation';

export const useLoginRequest = () => {
    const { userDispatch } = useUserState();
    const { handleGoToHomePage } = usePagesNavigation();

    const handleLogin = async (loginInput: LoginInput): Promise<void> => {
        try {
            userDispatch({
                type: USER_ACTION_TYPES.LOGIN_LOADING,
            });
            const response = await login(loginInput);
            userDispatch({
                type: USER_ACTION_TYPES.LOGIN_SUCCESS,
                payload: response.user,
            });
            return handleGoToHomePage();
        } catch (e) {
            // istanbul ignore next
            userDispatch({
                type: USER_ACTION_TYPES.LOGIN_FAILURE,
            });
        }
    };

    return { handleLogin };
};
