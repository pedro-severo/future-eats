'use client';

// TODO: fix warnings of devtools console

import React, { useEffect } from 'react';
import { useUnprotectedPage } from './shared/hooks/useUnprotectedPage';
import { HomeWrapper } from './styles';
import { MainLogoDarkMode } from './shared/components/mainLogoDarkMode';
import { useRouter } from 'next/navigation';
import PATH from './shared/constants/pathsEnum';
import { useNavigationHeaderState } from './shared/stores/navigationHeader';

// TODO: Remove istanbul ignore and test file
// istanbul ignore next
const Home = () => {
    useUnprotectedPage();
    const { setNavigationHeader } = useNavigationHeaderState();
    const router = useRouter();

    useEffect(() => {
        setNavigationHeader({
            shouldRenderHeader: false,
            title: '',
            shouldRenderBackIcon: false,
        });
    }, []);

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
