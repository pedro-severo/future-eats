import React from 'react';
import ThemeUsage from './designSystem/ThemeUsage';
import { Router } from './routes';

function App() {
    return (
        <ThemeUsage>
            <Router />
        </ThemeUsage>
    );
}

export default App;
