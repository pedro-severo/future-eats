import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import GlobalStateProvider from './global';

it('should ensure that Router is rendered', () => {
    render(
        <GlobalStateProvider>
            <App />
        </GlobalStateProvider>
    );
    const RouterComponent = screen.getByTestId('Router');
    expect(RouterComponent).toBeInTheDocument();
});
