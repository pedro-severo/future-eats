import { useRouter } from 'next/navigation';
import { useEffect, useMemo } from 'react';
import PATH from '../constants/pathsEnum';

// TODO: When a page is inside another page and these pages are unprotected and protected or vice versa
//       the hook of the first page is messing the hook of the second
export const useProtectedPage = () => {
    const router = useRouter();
    const token = useMemo<string | undefined>(() => {
        // istanbul ignore else
        if (typeof window !== 'undefined') {
            return localStorage.getItem('token');
        }
    }, []);

    useEffect(() => {
        // TODO: check token data to compare with user infos
        if (!token) router.push(PATH.LOGIN);
    }, [router, token]);
};
