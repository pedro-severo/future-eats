'use client';

import React, { useEffect } from 'react';
import { useProtectedPage } from '../shared/hooks/useProtectedPage';
import { useNavigationHeaderState } from '../shared/stores/navigationHeader';

// TODO: Remove istanbul ignore and test file
// istanbul ignore file

const Dashboard = () => {
    useProtectedPage();
    const { setNavigationHeader } = useNavigationHeaderState();

    useEffect(() => {
        setNavigationHeader({
            shouldRenderHeader: true,
            title: 'FutureEats',
            shouldRenderBackIcon: false,
        });
    }, []);
    return <div>DASHBOARD</div>;
};

export default Dashboard;
