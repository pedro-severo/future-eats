'use client';

// TODO: fix warnings of devtools console

import React from 'react';
import { useAuthChecking } from './shared/hooks/useAuthChecking';

// TODO: Remove istanbul ignore and test file
// istanbul ignore next
const Home = () => {
    useAuthChecking();
    return <div />;
};

export default Home;
