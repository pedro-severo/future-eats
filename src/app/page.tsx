'use client';

// TODO: fix warnings of devtools console

import React from 'react';
import { useProtectedPage } from './shared/hooks/useProtectedPage';

// TODO: Remove istanbul ignore and test file
// istanbul ignore next
const Home = () => {
    useProtectedPage();
    return <div />;
};

export default Home;
