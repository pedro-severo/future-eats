import { useRouter } from 'next/navigation';
import { useEffect, useMemo } from 'react';
import { COOKIES_LABEL, cookies } from '../services/cookies';
import { useUserState } from '../stores/redux/user';
import { useAuthenticateRequest } from '../services/api/authenticate/useAuthenticateRequest';
import PATH from '../constants/pathsEnum';

// TODO: When a page is inside another page and these pages are unprotected and protected or vice versa
//       the hook of the first page is messing the hook of the second
export const useProtectedPage = () => {
    const router = useRouter();
    const {
        userState: { token: tokenFromState, hasError },
    } = useUserState();
    const { handleAuthenticate } = useAuthenticateRequest();

    const token = useMemo<string | undefined>(() => {
        return cookies().get(COOKIES_LABEL.TOKEN);
    }, [cookies]);

    useEffect(() => {
        if (!tokenFromState && token) handleAuthenticate(token);
    }, [tokenFromState, token]);

    useEffect(() => {
        if (hasError || (!tokenFromState && !token)) router.push(PATH.LOGIN);
    }, [router, hasError]);
};
