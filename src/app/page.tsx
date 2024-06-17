'use client';

// TODO: fix warnings of devtools console

import React from 'react';
import { useUnprotectedPage } from './shared/hooks/useUnprotectedPage';

// TODO: Remove istanbul ignore and test file
// istanbul ignore next
const Home = () => {
    useUnprotectedPage();
    return <div />;
};

export default Home;
