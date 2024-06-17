import { useRouter } from 'next/navigation';
import { useEffect, useMemo } from 'react';
import PATH from '../constants/pathsEnum';

export const useUnprotectedPage = () => {
    const router = useRouter();
    const token = useMemo(() => {
        // istanbul ignore else
        if (typeof window !== 'undefined') {
            return localStorage.getItem('token');
        }
    }, []);

    useEffect(() => {
        // TODO: check token data to compare with user infos before send client to protected page
        if (token) router.push(PATH.DASHBOARD);
    }, [router, token]);
};
