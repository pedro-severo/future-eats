import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import GlobalStateProvider from './stores';
import './global.css';
import APIProvider from './services/api';

// eslint-disable-next-line react/no-deprecated
ReactDOM.render(
    <React.StrictMode>
        <APIProvider>
            <GlobalStateProvider>
                <App />
            </GlobalStateProvider>
        </APIProvider>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
