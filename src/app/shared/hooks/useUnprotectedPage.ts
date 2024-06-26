import { useRouter } from 'next/navigation';
import { useEffect, useMemo } from 'react';
import PATH from '../constants/pathsEnum';
import { COOKIES_LABEL, cookies } from '../services/cookies';

export const useUnprotectedPage = () => {
    const router = useRouter();
    const token = useMemo(() => {
        return cookies().get(COOKIES_LABEL.TOKEN);
    }, [cookies]);

    useEffect(() => {
        // TODO: check token data to compare with user infos before send client to protected page
        if (token) router.push(PATH.DASHBOARD);
    }, [router, token]);
};
