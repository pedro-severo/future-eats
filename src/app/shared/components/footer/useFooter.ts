import { AppRouterInstance } from 'next/dist/shared/lib/app-router-context.shared-runtime';
import { useRouter, usePathname } from 'next/navigation';
import { useMemo } from 'react';

export const useFooter = (): {
    router: AppRouterInstance;
    pagePath: string;
} => {
    const router = useRouter();
    const pathname = usePathname();
    const pagePath: string = useMemo(() => {
        const lastPath = pathname.split('/')[pathname.split('/').length - 1];
        return '/' + lastPath;
    }, [pathname]);
    return {
        router,
        pagePath,
    };
};
