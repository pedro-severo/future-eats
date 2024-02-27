import React from 'react';
import ThemeUsage from './designSystem/ThemeUsage';
import { Router } from './routes';
import { yupCustomValidationsSetup } from './services/yup';

function App() {
    yupCustomValidationsSetup();
    return (
        <ThemeUsage>
            <Router />
        </ThemeUsage>
    );
}

export default App;
