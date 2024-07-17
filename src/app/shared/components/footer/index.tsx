'use client';

import React from 'react';
import { FooterView } from './view';
import { useFooter } from './useFooter';

export const Footer = () => {
    const { router, pagePath } = useFooter();
    return (
        <FooterView
            data-testid="footer-view"
            router={router}
            pagePath={pagePath}
        />
    );
};
