'use client';

// TODO: fix warnings of devtools console

import React, { useEffect } from 'react';
import { useUnprotectedPage } from './shared/hooks/useUnprotectedPage';
import { useHeader } from './shared/hooks/useHeader';
import { HomeWrapper } from './styles';
import { MainLogoDarkMode } from './shared/components/mainLogoDarkMode';
import { useRouter } from 'next/navigation';
import PATH from './shared/constants/pathsEnum';

// TODO: Remove istanbul ignore and test file
// istanbul ignore next
const Home = () => {
    useUnprotectedPage();
    useHeader({ shouldRenderHeader: false, title: '' });
    const router = useRouter();
    useEffect(() => {
        setTimeout(() => {
            router.push(PATH.LOGIN);
        }, 1000);
    }, []);
    return (
        <HomeWrapper>
            <MainLogoDarkMode />
        </HomeWrapper>
    );
};

export default Home;
