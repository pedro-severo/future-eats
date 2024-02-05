import React from 'react';
import ThemeUsage from './designSystem/themeProvider';
import { Router } from './routes';

function App() {
    return (
        <ThemeUsage>
            <Router />
        </ThemeUsage>
    );
}

export default App;
