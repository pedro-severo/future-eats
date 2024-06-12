import { useRouter } from 'next/navigation';
import { useEffect, useMemo } from 'react';
import PATH from '../constants/pathsEnum';

export const useAuthChecking = () => {
    const router = useRouter();
    const token = useMemo(() => {
        return localStorage.getItem('token ');
    }, []);

    useEffect(() => {
        if (!token) router.push(PATH.LOGIN);
    }, [router, token]);
};
