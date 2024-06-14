import { useRouter } from 'next/navigation';
import { useEffect, useMemo } from 'react';
import PATH from '../constants/pathsEnum';

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
