import { useRouter } from 'next/navigation';
import { useEffect, useMemo } from 'react';
import PATH from '../constants/pathsEnum';
import { COOKIES_LABEL, cookies } from '../services/cookies';

// TODO: When a page is inside another page and these pages are unprotected and protected or vice versa
//       the hook of the first page is messing the hook of the second

// TODO: request endpoint to check token data and keeps on page, if this is the case
export const useProtectedPage = () => {
    const router = useRouter();
    const token = useMemo<string | undefined>(() => {
        return cookies().get(COOKIES_LABEL.TOKEN);
    }, [cookies]);

    useEffect(() => {
        // TODO: check token data to compare with user infos
        if (!token) router.push(PATH.LOGIN);
    }, [router, token]);
};
