import React from 'react';
import designSystem from '../../designSystem';
import { FooterWrapper } from './styles';
import PATH from '../../constants/pathsEnum';
import { AppRouterInstance } from 'next/dist/shared/lib/app-router-context.shared-runtime';
import { theme } from '../../designSystem/themeProvider';

const MemoFooterView = ({
    router,
    pagePath,
}: {
    router: AppRouterInstance;
    pagePath: string;
}) => {
    return (
        <FooterWrapper>
            <designSystem.iconButton
                data-testid="home-icon-button"
                onClick={
                    pagePath === PATH.DASHBOARD ?
                        () => null
                    :   () => router.push(PATH.DASHBOARD)
                }
            >
                <designSystem.home
                    data-testid="home-icon"
                    color={
                        pagePath === PATH.DASHBOARD ?
                            theme.palette.primary.main
                        :   theme.palette.secondary.main
                    }
                />
            </designSystem.iconButton>
            <designSystem.iconButton
                data-testid="cart-icon-button"
                onClick={
                    pagePath === PATH.CART ?
                        () => null
                    :   () => router.push(`${PATH.DASHBOARD}${PATH.CART}`)
                }
            >
                <designSystem.cart
                    data-testid="cart-icon"
                    color={
                        pagePath === PATH.CART ?
                            theme.palette.primary.main
                        :   theme.palette.secondary.main
                    }
                />
            </designSystem.iconButton>
            <designSystem.iconButton
                data-testid="profile-icon-button"
                onClick={
                    pagePath === PATH.PROFILE ?
                        () => null
                    :   () => router.push(`${PATH.DASHBOARD}${PATH.PROFILE}`)
                }
            >
                <designSystem.profile
                    data-testid="profile-icon"
                    color={
                        pagePath === PATH.PROFILE ?
                            theme.palette.primary.main
                        :   theme.palette.secondary.main
                    }
                />
            </designSystem.iconButton>
        </FooterWrapper>
    );
};

export const FooterView = React.memo(MemoFooterView);
