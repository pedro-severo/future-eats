'use client';

import React from 'react';
import { useHeader } from '../shared/hooks/useHeader';

// TODO: Remove istanbul ignore and test file
// istanbul ignore file

const Dashboard = () => {
    useHeader({
        shouldRenderHeader: true,
        title: 'FutureEats',
        shouldRenderBackIcon: false,
    });
    return <div>DASHBOARD</div>;
};

export default Dashboard;
