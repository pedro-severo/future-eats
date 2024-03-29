import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PATH from './interfaces';
import { LoginPage } from '../pages/login';
import { RegisterPage } from '../pages/register';
import { Header } from '../common/components/header';

export const Router = () => {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path={PATH.LOGIN} element={<LoginPage />} />
                <Route path={PATH.REGISTER} element={<RegisterPage />} />
                <Route
                    path={PATH.HOME}
                    element={<div>REGISTER ADDRESS PAGE</div>}
                />
            </Routes>
        </BrowserRouter>
    );
};
