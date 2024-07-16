import Cookies from 'js-cookie';
import { useCallback } from 'react';

type Options = {
    secure?: boolean;
    expires?: number;
};

export enum COOKIES_LABEL {
    TOKEN = 'token',
}

export const useCookies = () => {
    const set = useCallback(
        (field: COOKIES_LABEL, value: string, options?: Options) => {
            Cookies.set(field, value, options);
        },
        []
    );
    const get = useCallback((field: COOKIES_LABEL): string | undefined => {
        return Cookies.get(field);
    }, []);
    return {
        set,
        get,
    };
};
