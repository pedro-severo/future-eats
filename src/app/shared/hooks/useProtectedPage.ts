import { useRouter } from 'next/navigation';
import { useEffect, useMemo } from 'react';
import { COOKIES_LABEL, useCookies } from '../services/cookies';
import { useUserState } from '../stores/redux/user';
import { useAuthenticateRequest } from '../services/api/authenticate/useAuthenticateRequest';
import PATH from '../constants/pathsEnum';

// TODO: When a page is inside another page and these pages are unprotected and protected or vice versa
//       the hook of the first page is messing the hook of the second
export const useProtectedPage = () => {
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
        if (token && !isAuthenticated) handleAuthentication(token);
    }, [token, isAuthenticated, handleAuthentication]);

    useEffect(() => {
        if (isAuthenticated === false) router.push(PATH.LOGIN);
    }, [isAuthenticated]);
};
