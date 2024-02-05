import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import GlobalStateProvider from './global';

test('renders learn react link', () => {
    render(
        <GlobalStateProvider>
            <App />
        </GlobalStateProvider>
    );
    const RouterComponent = screen.getByTestId('Router');
    expect(RouterComponent).toBeInTheDocument();
});
