import { useRouter } from 'next/navigation';
import { useEffect, useMemo } from 'react';
import PATH from '../constants/pathsEnum';
import { COOKIES_LABEL, cookies } from '../services/cookies';
import { useUserState } from '../stores/redux/user';
import { useAuthenticateRequest } from '../services/api/authenticate/useAuthenticateRequest';

export const useUnprotectedPage = () => {
    const router = useRouter();
    const {
        userState: { token: tokenFromState, hasError },
    } = useUserState();
    const { handleAuthenticate } = useAuthenticateRequest();

    const token = useMemo(() => {
        return tokenFromState || cookies().get(COOKIES_LABEL.TOKEN);
    }, [cookies, tokenFromState]);

    useEffect(() => {
        if (token) handleAuthenticate(token);
    }, [token]);

    useEffect(() => {
        if (!hasError && tokenFromState) router.push(PATH.DASHBOARD);
    }, [router, hasError, tokenFromState]);
};
