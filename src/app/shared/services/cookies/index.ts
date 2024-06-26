import Cookies from 'js-cookie';

type Options = {
    secure?: boolean;
    expires?: number;
};

export enum COOKIES_LABEL {
    TOKEN = 'token',
}

export const cookies = () => {
    const set = async (
        field: COOKIES_LABEL,
        value: string,
        options?: Options
    ) => {
        Cookies.set(field, value, options);
    };
    const get = (field: COOKIES_LABEL): string | undefined => {
        return Cookies.get(field);
    };
    return {
        set,
        get,
    };
};
