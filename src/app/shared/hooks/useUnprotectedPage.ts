import { useRouter } from 'next/navigation';
import { useEffect, useMemo } from 'react';
import PATH from '../constants/pathsEnum';
import { COOKIES_LABEL, useCookies } from '../services/cookies';
import { useUserState } from '../stores/redux/user';
import { useAuthenticateRequest } from '../services/api/authenticate/useAuthenticateRequest';

export const useUnprotectedPage = () => {
    const router = useRouter();
    const {
        userState: { token: tokenFromState, isAuthenticated },
    } = useUserState();
    const { get } = useCookies();
    const token = useMemo(() => {
        return tokenFromState || get(COOKIES_LABEL.TOKEN);
    }, [get, tokenFromState]);
    const { handleAuthentication } = useAuthenticateRequest();

    useEffect(() => {
        console.log('LOGIN');
        if (token && !isAuthenticated) handleAuthentication(token);
    }, [token, isAuthenticated]);

    useEffect(() => {
        if (isAuthenticated) router.push(PATH.DASHBOARD);
    }, [isAuthenticated]);
};
